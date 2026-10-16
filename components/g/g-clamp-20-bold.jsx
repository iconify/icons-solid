import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzv7ahb5l.css';
import '../../css/j/jmwk00zjz.css';
import '../../css/a/ajpasxnjv.css';
import '../../css/d/d4i9wcynv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qzv7ahb5l"/><path class="jmwk00zjz"/><path class="ajpasxnjv"/><path class="d4i9wcynv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:g-clamp-20-bold"} {...others} />);
}

export default Component;
