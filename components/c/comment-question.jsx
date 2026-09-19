import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/k5kdr4bqp.css';
import '../../css/m/muta9tbky.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="k5kdr4bqp"/><path class="muta9tbky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:comment-question"} {...others} />);
}

export default Component;
