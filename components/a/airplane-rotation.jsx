import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/r79_o3b5u.css';
import '../../css/u/uf5xalb-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="r79_o3b5u"/><path clip-rule="evenodd" class="uf5xalb-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:airplane-rotation"} {...others} />);
}

export default Component;
