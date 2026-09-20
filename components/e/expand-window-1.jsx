import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mff4e7myf.css';
import '../../css/v/v3x57pw8b.css';
import '../../css/s/sba0d8bsa.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="mff4e7myf"/><path class="v3x57pw8b"/><path class="sba0d8bsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:expand-window-1"} {...others} />);
}

export default Component;
