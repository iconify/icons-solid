import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_rjcdbjn.css';

const viewBox = {"width":90,"height":80};
const content = `<path clip-rule="evenodd" class="j_rjcdbjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:cogs-1-bold"} {...others} />);
}

export default Component;
