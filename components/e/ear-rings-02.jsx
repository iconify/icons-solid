import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m9578d-af.css';
import '../../css/c/cfcg70bpk.css';
import '../../css/q/qijn7zboq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m9578d-af"/><path class="cfcg70bpk"/><path class="qijn7zboq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ear-rings-02"} {...others} />);
}

export default Component;
