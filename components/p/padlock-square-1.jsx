import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p86j2-b6v.css';
import '../../css/l/lc05vkmqz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="p86j2-b6v"/><path class="lc05vkmqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:padlock-square-1"} {...others} />);
}

export default Component;
