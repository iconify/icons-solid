import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbn2yrbjm.css';
import '../../css/v/v82trt5er.css';
import '../../css/w/wtr3z9boz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mbn2yrbjm"/><path clip-rule="evenodd" class="v82trt5er"/><path class="wtr3z9boz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-lock-filled"} {...others} />);
}

export default Component;
