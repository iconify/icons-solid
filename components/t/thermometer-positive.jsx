import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/ppjeo_b_w.css';
import '../../css/k/k5k144bnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ppjeo_b_w"/><path class="k5k144bnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:thermometer-positive"} {...others} />);
}

export default Component;
