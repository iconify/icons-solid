import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a1gtqmeia.css';
import '../../css/r/rzlkkabrn.css';
import '../../css/w/wxhpr9g8h.css';
import '../../css/k/kbowy4wvo.css';
import '../../css/z/zeyazuban.css';
import '../../css/x/xkqvnyb4l.css';
import '../../css/w/w67scs2rk.css';
import '../../css/m/mzhwytb5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a1gtqmeia"/><path class="rzlkkabrn"/><path class="wxhpr9g8h"/><path class="kbowy4wvo"/><path class="zeyazuban"/><path class="xkqvnyb4l"/><path class="w67scs2rk"/><path class="mzhwytb5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:barrel"} {...others} />);
}

export default Component;
