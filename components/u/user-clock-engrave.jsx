import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/is7p6owsa.css';
import '../../css/q/q6bv9r6nh.css';
import '../../css/f/fq06eqbqz.css';
import '../../css/l/ljeitrr-k.css';
import '../../css/o/oe4c91bbg.css';
import '../../css/v/vmhlk0o_i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="is7p6owsa wm-k"/><path class="q6bv9r6nh wm-s"/><path class="fq06eqbqz wm-shadow"/><path class="ljeitrr-k wm-k"/><path class="oe4c91bbg wm-s"/><path class="vmhlk0o_i wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-clock-engrave"} {...others} />);
}

export default Component;
