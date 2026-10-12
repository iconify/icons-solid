import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oeb77jooy.css';
import '../../css/q/qrvg1ubka.css';
import '../../css/i/ifax5acwj.css';
import '../../css/w/wu32es0ty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oeb77jooy"/><path class="qrvg1ubka"/><path class="ifax5acwj"/><path class="wu32es0ty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-bar-horizontal"} {...others} />);
}

export default Component;
