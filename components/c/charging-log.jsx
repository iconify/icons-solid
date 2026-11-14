import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ov6bs_bay.css';
import '../../css/x/xhi8sxbwy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ov6bs_bay"/><path class="xhi8sxbwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:charging-log"} {...others} />);
}

export default Component;
