import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vrz8f4stt.css';
import '../../css/i/iida3r18d.css';
import '../../css/f/fq0cay4ud.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vrz8f4stt"/><path class="iida3r18d"/><path class="fq0cay4ud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:time-lapse"} {...others} />);
}

export default Component;
