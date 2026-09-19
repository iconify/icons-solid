import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jetbey4kh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jetbey4kh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:brightness-contrast"} {...others} />);
}

export default Component;
