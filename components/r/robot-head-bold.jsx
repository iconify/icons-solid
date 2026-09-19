import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivu72hdvp.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="ivu72hdvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:robot-head-bold"} {...others} />);
}

export default Component;
