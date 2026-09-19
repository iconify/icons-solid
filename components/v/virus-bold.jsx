import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e50ycdctt.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="e50ycdctt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:virus-bold"} {...others} />);
}

export default Component;
