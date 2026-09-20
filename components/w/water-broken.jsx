import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mzxv1bbpg.css';
import '../../css/t/t135zx7nc.css';
import '../../css/v/vbcgq2ytz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mzxv1bbpg"/><path class="t135zx7nc"/><path class="vbcgq2ytz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:water-broken"} {...others} />);
}

export default Component;
