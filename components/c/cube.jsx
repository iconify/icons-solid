import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/r1fac9bcy.css';
import '../../css/u/ut8732-ff.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="r1fac9bcy"/><path class="ut8732-ff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:cube"} {...others} />);
}

export default Component;
