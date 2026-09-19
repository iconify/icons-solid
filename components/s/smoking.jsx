import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-ms6bclb.css';
import '../../css/h/hx5u2eb2s.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="x-ms6bclb"/><path class="hx5u2eb2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:smoking"} {...others} />);
}

export default Component;
