import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yu69tb9sx.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="yu69tb9sx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:unlink-bold"} {...others} />);
}

export default Component;
