import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d1dcdbblm.css';
import '../../css/f/f44jgxt3x.css';
import '../../css/t/thjectbkq.css';
import '../../css/i/ipkd9vbgw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="d1dcdbblm"/><path class="f44jgxt3x wm-a"/><path class="thjectbkq wm-a"/><path class="ipkd9vbgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thermometer-sun-duo"} {...others} />);
}

export default Component;
