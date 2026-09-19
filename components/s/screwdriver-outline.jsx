import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l80po2zqg.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="l80po2zqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:screwdriver-outline"} {...others} />);
}

export default Component;
