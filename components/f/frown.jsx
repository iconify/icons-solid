import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/i/ibb1isbvp.css';
import '../../css/o/o67y8390q.css';
import '../../css/e/e841wlo0j.css';
import '../../css/v/vy5u09bot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="ibb1isbvp"/><path class="o67y8390q"/><path class="e841wlo0j"/><path class="vy5u09bot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:frown"} {...others} />);
}

export default Component;
