import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/up8mseb2q.css';
import '../../css/j/jd76gjb6l.css';
import '../../css/b/buu-zbbrj.css';
import '../../css/c/ckybhc0xv.css';
import '../../css/l/lm9dv1b9t.css';
import '../../css/m/mpzjag19o.css';
import '../../css/i/irwf7abqg.css';
import '../../css/b/bkr_g-bdq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="up8mseb2q"/><path class="jd76gjb6l"/><path class="buu-zbbrj"/><path class="ckybhc0xv"/><path class="lm9dv1b9t"/><path class="mpzjag19o"/><path class="irwf7abqg"/><path class="bkr_g-bdq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:camera-small"} {...others} />);
}

export default Component;
