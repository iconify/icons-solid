import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djmwz3owo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="djmwz3owo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:train-heart"} {...others} />);
}

export default Component;
