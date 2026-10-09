import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt4t1kbqx.css';
import '../../css/x/x-k2aqbil.css';
import '../../css/z/zd6bbv0yb.css';
import '../../css/y/yklljhbfl.css';
import '../../css/h/hs4lzx5nw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lt4t1kbqx"/><path class="x-k2aqbil"/><path class="zd6bbv0yb"/><path class="yklljhbfl"/><path class="hs4lzx5nw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-charging-hub-20-bold"} {...others} />);
}

export default Component;
