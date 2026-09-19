import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1sm1zbma.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="z1sm1zbma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:paint-brush-outline"} {...others} />);
}

export default Component;
