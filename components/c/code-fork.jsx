import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvaiqfbks.css';

const viewBox = {"width":1024,"height":1536};
const content = `<path class="rvaiqfbks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:code-fork"} {...others} />);
}

export default Component;
