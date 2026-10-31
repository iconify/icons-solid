import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rmku--bxg.css';
import '../../css/e/em_i-2_kp.css';
import '../../css/u/unv51cu4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="rmku--bxg wm-shadow"/><path class="em_i-2_kp wm-shadow"/><path class="unv51cu4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:bamboo"} {...others} />);
}

export default Component;
