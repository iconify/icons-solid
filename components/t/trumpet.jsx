import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4u8pbwjc.css';
import '../../css/u/u0kbdhb5x.css';
import '../../css/c/ct3xegiqx.css';
import '../../css/k/kye4rabpo.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="x4u8pbwjc"><path class="u0kbdhb5x"/><path class="ct3xegiqx"/></g><path class="kye4rabpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:trumpet"} {...others} />);
}

export default Component;
