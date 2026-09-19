import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e25xsfz0y.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="e25xsfz0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:eraser"} {...others} />);
}

export default Component;
