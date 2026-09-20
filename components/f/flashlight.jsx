import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wb9-tbcgv.css';
import '../../css/h/hqy_5wbyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wb9-tbcgv"/><path class="hqy_5wbyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:flashlight"} {...others} />);
}

export default Component;
