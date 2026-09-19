import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5dva-b7k.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="t5dva-b7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:link-1-bold"} {...others} />);
}

export default Component;
