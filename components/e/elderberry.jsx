import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3j8hc2km.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z3j8hc2km"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:elderberry"} {...others} />);
}

export default Component;
