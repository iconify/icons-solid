import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rhscmsbal.css';
import '../../css/e/ek8ab_bvz.css';
import '../../css/a/az1_6mbut.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="rhscmsbal"/><path clip-rule="evenodd" class="ek8ab_bvz"/><path class="az1_6mbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:wallet-flat"} {...others} />);
}

export default Component;
