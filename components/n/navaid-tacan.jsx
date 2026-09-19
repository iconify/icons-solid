import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czwmjhe3n.css';
import '../../css/y/yv8w4bckf.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="czwmjhe3n"/><path class="yv8w4bckf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:navaid-tacan"} {...others} />);
}

export default Component;
