import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nyaea9ybj.css';
import '../../css/q/q2o_hyi9e.css';
import '../../css/e/emfz5-9qe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nyaea9ybj"/><circle class="q2o_hyi9e"/><path class="emfz5-9qe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tropical-storm-tracks"} {...others} />);
}

export default Component;
