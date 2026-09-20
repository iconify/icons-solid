import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fi0fil8ok.css';
import '../../css/k/k0-tm54qt.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="fi0fil8ok"/><path class="k0-tm54qt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:piggy-bank"} {...others} />);
}

export default Component;
