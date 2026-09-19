import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr4g3w4iu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zr4g3w4iu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:basketball-jersey"} {...others} />);
}

export default Component;
