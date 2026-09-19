import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qbqs7jbro.css';
import '../../css/w/websu8mzr.css';
import '../../css/g/gxt617bhz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qbqs7jbro"/><path class="websu8mzr"/><path class="gxt617bhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:safari"} {...others} />);
}

export default Component;
