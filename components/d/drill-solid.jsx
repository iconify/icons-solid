import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a_cg1tblq.css';
import '../../css/z/z0b3g102j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="a_cg1tblq"/><path class="wm-a z0b3g102j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:drill-solid"} {...others} />);
}

export default Component;
