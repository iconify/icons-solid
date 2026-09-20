import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lj7tznekf.css';
import '../../css/w/wa5yyab_y.css';
import '../../css/g/glsl5ab5m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="lj7tznekf"/><path class="wa5yyab_y"/><path class="glsl5ab5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:desktop-lock"} {...others} />);
}

export default Component;
