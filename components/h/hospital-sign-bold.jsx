import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhp55-bbc.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="nhp55-bbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hospital-sign-bold"} {...others} />);
}

export default Component;
