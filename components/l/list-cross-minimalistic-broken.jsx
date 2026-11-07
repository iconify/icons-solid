import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pre11cbbs.css';
import '../../css/f/f8edcu39k.css';
import '../../css/l/lydqd4-wj.css';
import '../../css/r/r9km2ybri.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pre11cbbs"/><path class="f8edcu39k"/><path class="lydqd4-wj"/><path class="r9km2ybri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-cross-minimalistic-broken"} {...others} />);
}

export default Component;
