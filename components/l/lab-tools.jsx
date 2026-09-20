import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qo0ah0brb.css';
import '../../css/c/cx69zbcgz.css';
import '../../css/h/hqkh_2bgs.css';
import '../../css/q/qr9uqjbdp.css';
import '../../css/e/e4xhl5okr.css';

const viewBox = {"width":41,"height":41,"left":-0.5};
const content = `<g class="ft5dv1b6b"><path class="qo0ah0brb"/><path class="cx69zbcgz"/><path class="hqkh_2bgs"/><path class="qr9uqjbdp"/><path class="e4xhl5okr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:lab-tools"} {...others} />);
}

export default Component;
