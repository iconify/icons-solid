import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m32h73d6t.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="m32h73d6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:path-1-outline"} {...others} />);
}

export default Component;
