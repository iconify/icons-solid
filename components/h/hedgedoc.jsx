import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xue4b2bit.css';
import '../../css/f/fi0yvjbsb.css';
import '../../css/r/rm0g37w0t.css';
import '../../css/o/o9emg3bog.css';
import '../../css/n/nd7ewndjw.css';
import '../../css/j/j18-mk8vj.css';
import '../../css/i/i9kgggz4q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xue4b2bit"/><path class="fi0yvjbsb"/><linearGradient id="SVGdKbzheqv" x1="161.9" x2="230.8" y1="404.7" y2="260" gradientUnits="userSpaceOnUse"><stop offset="0" class="rm0g37w0t"/><stop offset="1" class="o9emg3bog"/></linearGradient><path fill="url(#SVGdKbzheqv)" class="nd7ewndjw"/><path class="j18-mk8vj"/><path class="i9kgggz4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hedgedoc"} {...others} />);
}

export default Component;
