import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fft7p4bow.css';
import '../../css/m/mzef3f7xa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fft7p4bow"/><path class="mzef3f7xa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:backward-15-seconds"} {...others} />);
}

export default Component;
