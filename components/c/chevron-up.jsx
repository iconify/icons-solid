import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6sb11bjc.css';
import '../../css/s/szrk527in.css';
import '../../css/r/r0urdebli.css';
import '../../css/a/anokm3blr.css';
import '../../css/r/rma90pb0k.css';
import '../../css/t/t_j2cpgce.css';
import '../../css/j/j8gx_oigc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t6sb11bjc wm-shadow"/><path class="szrk527in"/><path class="r0urdebli"/><path class="anokm3blr"/><path class="rma90pb0k"/><path class="t_j2cpgce wm-shine"/><path class="j8gx_oigc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:chevron-up"} {...others} />);
}

export default Component;
