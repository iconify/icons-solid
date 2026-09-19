import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnn7sfq2n.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="nnn7sfq2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:shovel-outline"} {...others} />);
}

export default Component;
