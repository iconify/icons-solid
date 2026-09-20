import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/s42rpkduo.css';
import '../../css/w/wze762b-p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="h01tyzbfu"><path class="s42rpkduo"/><path class="wze762b-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:router-wifi-network"} {...others} />);
}

export default Component;
