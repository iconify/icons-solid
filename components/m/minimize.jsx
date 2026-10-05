import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/cddtx52ge.css';
import '../../css/n/nab1kbbwm.css';
import '../../css/h/hnxj6fbkd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="cddtx52ge"/><path class="nab1kbbwm"/><path class="hnxj6fbkd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:minimize"} {...others} />);
}

export default Component;
