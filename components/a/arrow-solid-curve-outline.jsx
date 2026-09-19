import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9yv_e71e.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="g9yv_e71e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-solid-curve-outline"} {...others} />);
}

export default Component;
