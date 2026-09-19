import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2jwcgbdq.css';
import '../../css/c/cu9d7nszf.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="f2jwcgbdq"/><path class="cu9d7nszf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:polygon"} {...others} />);
}

export default Component;
