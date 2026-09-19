import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xlqum1bag.css';
import '../../css/n/n5zgs7bnq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><rect class="xlqum1bag"/><rect class="n5zgs7bnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:toggle-2-bold"} {...others} />);
}

export default Component;
