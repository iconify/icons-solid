import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/selg7tbbx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="selg7tbbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:abstract-026"} {...others} />);
}

export default Component;
