import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z12cm2qdg.css';
import '../../css/v/v0nouub9y.css';
import '../../css/f/f5n5-__gk.css';
import '../../css/d/dt4en7b0u.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z12cm2qdg"/><path class="v0nouub9y"/><path class="f5n5-__gk"/><path class="dt4en7b0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:yurt-20"} {...others} />);
}

export default Component;
