import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijhqezidm.css';
import '../../css/o/ob2nyzbep.css';
import '../../css/c/cyt_muboz.css';
import '../../css/q/qr4i7rbxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ijhqezidm"/><path class="ob2nyzbep"/><path class="cyt_muboz"/><path class="qr4i7rbxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:arrow-rectangle-down-2"} {...others} />);
}

export default Component;
