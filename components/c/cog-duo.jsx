import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vt9d2mb6f.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="vt9d2mb6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:cog-duo"} {...others} />);
}

export default Component;
