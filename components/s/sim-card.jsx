import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vy-r30bhj.css';
import '../../css/j/jgs9n-bdg.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="vy-r30bhj"/><path class="jgs9n-bdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sim-card"} {...others} />);
}

export default Component;
