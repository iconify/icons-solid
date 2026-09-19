import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zddxcdb6v.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="zddxcdb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:seek-skip-1-outline"} {...others} />);
}

export default Component;
