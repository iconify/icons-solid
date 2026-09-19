import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsx8atb8o.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="rsx8atb8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:building-3-bold"} {...others} />);
}

export default Component;
