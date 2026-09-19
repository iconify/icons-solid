import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5ko7v8oa.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="r5ko7v8oa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:book-outline"} {...others} />);
}

export default Component;
