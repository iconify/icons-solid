import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i00l4ub9g.css';
import '../../css/x/xa8rigbuu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="i00l4ub9g"/><path class="xa8rigbuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:heart-rate"} {...others} />);
}

export default Component;
