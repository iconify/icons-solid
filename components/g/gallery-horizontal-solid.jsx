import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/soxy3ccjt.css';
import '../../css/f/f_g-ti_oa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="soxy3ccjt"/><path class="f_g-ti_oa wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gallery-horizontal-solid"} {...others} />);
}

export default Component;
