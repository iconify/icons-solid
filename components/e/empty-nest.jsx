import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uz4h91-er.css';
import '../../css/s/sk4gnbcgv.css';
import '../../css/r/rzbduwrtc.css';
import '../../css/w/w8ngsjbsw.css';
import '../../css/l/lxi5ubckp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="uz4h91-er"/><path class="sk4gnbcgv"/><path clip-rule="evenodd" class="rzbduwrtc"/><path clip-rule="evenodd" class="w8ngsjbsw"/><path clip-rule="evenodd" class="lxi5ubckp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:empty-nest"} {...others} />);
}

export default Component;
