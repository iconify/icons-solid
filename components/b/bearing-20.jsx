import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4bjo-bjt.css';
import '../../css/t/tiuaiabal.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r4bjo-bjt"/><path class="tiuaiabal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bearing-20"} {...others} />);
}

export default Component;
