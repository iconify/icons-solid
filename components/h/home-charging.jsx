import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w23k9ifmr.css';
import '../../css/z/zx2u6rbqg.css';
import '../../css/i/ivqiy5bdm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w23k9ifmr"/><path class="zx2u6rbqg"/><path class="ivqiy5bdm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:home-charging"} {...others} />);
}

export default Component;
