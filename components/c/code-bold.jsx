import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnc7j12jl.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="cnc7j12jl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:code-bold"} {...others} />);
}

export default Component;
