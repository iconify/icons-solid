import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mw6efdbff.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="mw6efdbff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:border-all-outline"} {...others} />);
}

export default Component;
