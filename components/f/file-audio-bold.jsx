import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iv_p3kcsw.css';
import '../../css/w/w6x-4ipkl.css';
import '../../css/x/x8_a0bb_i.css';
import '../../css/w/wm3j448rr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iv_p3kcsw"/><path class="w6x-4ipkl"/><path clip-rule="evenodd" class="x8_a0bb_i"/><path class="wm3j448rr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-audio-bold"} {...others} />);
}

export default Component;
