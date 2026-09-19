import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h50f4zr4v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h50f4zr4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:diamond-ring"} {...others} />);
}

export default Component;
