import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z119_ybhq.css';
import '../../css/y/ysqi2pc_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z119_ybhq"/><path class="ysqi2pc_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:page-plus-in"} {...others} />);
}

export default Component;
