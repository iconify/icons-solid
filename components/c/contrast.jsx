import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8-k17wvu.css';
import '../../css/k/k10tp0b2x.css';
import '../../css/w/w7zkmmbma.css';
import '../../css/j/jaaglv9hr.css';
import '../../css/m/mukrhdc3s.css';
import '../../css/g/g6ao6ibwg.css';
import '../../css/h/hxnllrbii.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w8-k17wvu wm-k"/><path class="k10tp0b2x wm-k"/><path class="w7zkmmbma wm-k"/><path class="jaaglv9hr wm-a"/><path class="mukrhdc3s wm-a"/><path class="g6ao6ibwg wm-a"/><path class="hxnllrbii wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:contrast"} {...others} />);
}

export default Component;
