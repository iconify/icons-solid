import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/av9yo2bgk.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="av9yo2bgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:box-close-outline"} {...others} />);
}

export default Component;
