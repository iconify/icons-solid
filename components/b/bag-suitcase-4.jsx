import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/plcngepyd.css';
import '../../css/c/cz_0i9bjm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="plcngepyd"/><path class="cz_0i9bjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:bag-suitcase-4"} {...others} />);
}

export default Component;
