import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/l63wkcchf.css';
import '../../css/w/w_msxk8wv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="l63wkcchf"/><path class="w_msxk8wv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:modern-tv-curvy-edge"} {...others} />);
}

export default Component;
