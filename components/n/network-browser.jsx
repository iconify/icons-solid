import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dg5ykdbtd.css';
import '../../css/u/uj6ju-bjn.css';
import '../../css/j/jz1nelbbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dg5ykdbtd"/><path class="uj6ju-bjn"/><path class="jz1nelbbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:network-browser"} {...others} />);
}

export default Component;
