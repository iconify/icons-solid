import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gi87txbdj.css';
import '../../css/h/hdcm3gbmg.css';
import '../../css/w/wkd52swho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="gi87txbdj"/><path class="hdcm3gbmg"/><path class="wkd52swho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:post-date"} {...others} />);
}

export default Component;
