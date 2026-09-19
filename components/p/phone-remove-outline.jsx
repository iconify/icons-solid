import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oo2hszohb.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="oo2hszohb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:phone-remove-outline"} {...others} />);
}

export default Component;
