import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kcxthib1x.css';
import '../../css/j/jro3hvb0k.css';
import '../../css/l/lyew2g4yv.css';
import '../../css/p/p55ze_r2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="kcxthib1x"/><path class="jro3hvb0k"/><rect class="lyew2g4yv"/><rect class="p55ze_r2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:meal-box"} {...others} />);
}

export default Component;
