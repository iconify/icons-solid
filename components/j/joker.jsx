import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yom9-8bmz.css';
import '../../css/o/occmn0cmv.css';
import '../../css/n/nut2xvvam.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="yom9-8bmz"/><path class="occmn0cmv"/><path class="nut2xvvam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:joker"} {...others} />);
}

export default Component;
