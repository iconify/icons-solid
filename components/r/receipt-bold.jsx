import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yo2crbouy.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="yo2crbouy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:receipt-bold"} {...others} />);
}

export default Component;
