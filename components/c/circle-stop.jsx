import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/ssxi8fbrc.css';
import '../../css/v/vjzc1ab5s.css';
import '../../css/r/rlz1_xblu.css';
import '../../css/x/xidz7sbfk.css';
import '../../css/c/clzlj-pha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ssxi8fbrc wm-shadow"/><path class="vjzc1ab5s wm-shadow"/><path class="rlz1_xblu"/><path class="xidz7sbfk"/><path class="clzlj-pha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:circle-stop"} {...others} />);
}

export default Component;
