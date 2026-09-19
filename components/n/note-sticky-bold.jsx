import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e57oocc4w.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="e57oocc4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:note-sticky-bold"} {...others} />);
}

export default Component;
