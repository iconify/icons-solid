import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmkmgc1ec.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="zmkmgc1ec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:search-1"} {...others} />);
}

export default Component;
