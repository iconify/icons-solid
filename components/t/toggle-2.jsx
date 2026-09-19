import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zct5zxqrj.css';
import '../../css/p/p7wva45sy.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="zct5zxqrj"/><path class="p7wva45sy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:toggle-2"} {...others} />);
}

export default Component;
