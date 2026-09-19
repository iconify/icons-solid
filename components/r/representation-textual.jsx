import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zycd0oq2e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zycd0oq2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:representation-textual"} {...others} />);
}

export default Component;
