import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/slaq_1zap.css';
import '../../css/q/qnehnjw6c.css';
import '../../css/f/fk3w5gqik.css';
import '../../css/s/spbohtbnc.css';
import '../../css/r/r84p9ezvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="slaq_1zap wm-k"/><path class="qnehnjw6c wm-a"/><path class="fk3w5gqik wm-shadow"/><path class="spbohtbnc wm-k"/><path class="r84p9ezvo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:backpack-engrave"} {...others} />);
}

export default Component;
