import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6s-tdxlh.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="n6s-tdxlh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:o-outline"} {...others} />);
}

export default Component;
