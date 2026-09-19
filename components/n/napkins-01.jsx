import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yjy_lob3u.css';
import '../../css/o/ooks3obcj.css';
import '../../css/s/sk8kac_qm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yjy_lob3u"/><path class="ooks3obcj"/><path class="sk8kac_qm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:napkins-01"} {...others} />);
}

export default Component;
