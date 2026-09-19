import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6_uqk3gh.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="t6_uqk3gh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-round-outline"} {...others} />);
}

export default Component;
