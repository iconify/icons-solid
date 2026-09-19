import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv6bx_bmd.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="sv6bx_bmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:lips-bold"} {...others} />);
}

export default Component;
