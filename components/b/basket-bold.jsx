import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3rz52jnr.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="w3rz52jnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:basket-bold"} {...others} />);
}

export default Component;
