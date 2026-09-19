import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zmtno6blu.css';
import '../../css/t/txu5b4k-p.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="zmtno6blu"/><path class="txu5b4k-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:speedometer-3"} {...others} />);
}

export default Component;
