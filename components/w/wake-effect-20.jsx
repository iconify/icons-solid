import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pgz8hfjwl.css';
import '../../css/f/f55k4bcmg.css';
import '../../css/m/ma4byl76i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pgz8hfjwl"/><path class="f55k4bcmg"/><path class="ma4byl76i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wake-effect-20"} {...others} />);
}

export default Component;
