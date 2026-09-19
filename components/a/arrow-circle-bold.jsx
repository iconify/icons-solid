import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2if9lbnj.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="m2if9lbnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-circle-bold"} {...others} />);
}

export default Component;
