import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z-k_3lrhl.css';
import '../../css/w/w5sj3gbws.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="z-k_3lrhl"/><path class="w5sj3gbws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:annoncement-megaphone"} {...others} />);
}

export default Component;
