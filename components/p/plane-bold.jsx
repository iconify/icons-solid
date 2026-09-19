import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xalv2bbkh.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="xalv2bbkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:plane-bold"} {...others} />);
}

export default Component;
