import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uhqoity7w.css';
import '../../css/j/j969m5bto.css';
import '../../css/t/t3sjiccju.css';
import '../../css/t/tqn7fg99p.css';
import '../../css/o/ouxkqqbkl.css';
import '../../css/p/pmfc-0nza.css';
import '../../css/n/nnnfowbze.css';
import '../../css/d/dk3__hquz.css';
import '../../css/q/qbm-vkbhx.css';
import '../../css/g/g82ipvbsd.css';
import '../../css/p/p8v6_6bvm.css';
import '../../css/g/gngzqoyib.css';
import '../../css/f/fj8on2b2p.css';
import '../../css/d/dc60g9b9q.css';
import '../../css/f/f5286o7dv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="uhqoity7w"/><path class="j969m5bto"/><path class="t3sjiccju"/><path class="tqn7fg99p"/><path class="ouxkqqbkl"/><path class="pmfc-0nza"/><path clip-rule="evenodd" class="nnnfowbze"/><path clip-rule="evenodd" class="dk3__hquz"/><path class="qbm-vkbhx"/><path class="g82ipvbsd"/><path class="p8v6_6bvm"/><path class="gngzqoyib"/><path class="fj8on2b2p"/><path class="dc60g9b9q"/><path class="f5286o7dv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:man-surfing-medium-dark"} {...others} />);
}

export default Component;
