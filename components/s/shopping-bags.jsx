import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/e6cpddcyw.css';
import '../../css/r/ry3rr2hev.css';
import '../../css/e/eu2bi-boo.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="e6cpddcyw"/><path class="ry3rr2hev"/><path class="eu2bi-boo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:shopping-bags"} {...others} />);
}

export default Component;
