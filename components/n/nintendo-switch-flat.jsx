import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vqyhl7f-e.css';
import '../../css/q/qzod2tomk.css';
import '../../css/o/oe7cyp87d.css';
import '../../css/t/t0t48xb6n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vqyhl7f-e"/><path class="qzod2tomk"/><path clip-rule="evenodd" class="oe7cyp87d"/><path class="t0t48xb6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:nintendo-switch-flat"} {...others} />);
}

export default Component;
