import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fhg9uzbbf.css';
import '../../css/j/juyra7bjq.css';
import '../../css/e/e0si8p1_g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="fhg9uzbbf"/><path class="juyra7bjq"/><path class="e0si8p1_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:subscription-cashflow"} {...others} />);
}

export default Component;
