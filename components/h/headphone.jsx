import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/snd7srb_o.css';
import '../../css/s/st2krab0w.css';
import '../../css/i/ie_b1ebhj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="snd7srb_o"/><path class="st2krab0w"/><path class="ie_b1ebhj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:headphone"} {...others} />);
}

export default Component;
