import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a088n9bet.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="a088n9bet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:cog-1"} {...others} />);
}

export default Component;
