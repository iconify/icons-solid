import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q378etc0v.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q378etc0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:graduation-cap-solid"} {...others} />);
}

export default Component;
