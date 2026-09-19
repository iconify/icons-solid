import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxo10u8ki.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="xxo10u8ki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:adjust-1-bold"} {...others} />);
}

export default Component;
