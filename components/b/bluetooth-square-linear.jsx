import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/om59y67-s.css';
import '../../css/h/hyyb83bqk.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/s/si3inpc3v.css';
import '../../css/i/i70bgdbfl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="om59y67-s"/><path class="hyyb83bqk"/><path class="pw8f5c0fp"/><path class="si3inpc3v"/><path class="i70bgdbfl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bluetooth-square-linear"} {...others} />);
}

export default Component;
