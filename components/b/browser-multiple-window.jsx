import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/agkb7q5ez.css';
import '../../css/y/yazhrsbpy.css';
import '../../css/d/dqi84u9xn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="agkb7q5ez"/><path class="yazhrsbpy"/><path class="dqi84u9xn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:browser-multiple-window"} {...others} />);
}

export default Component;
