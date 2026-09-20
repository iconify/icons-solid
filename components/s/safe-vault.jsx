import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mwid3__sz.css';
import '../../css/w/wljy39bdf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="mwid3__sz"/><path class="wljy39bdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:safe-vault"} {...others} />);
}

export default Component;
