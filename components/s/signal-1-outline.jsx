import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zd4gsf7oq.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="zd4gsf7oq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:signal-1-outline"} {...others} />);
}

export default Component;
