import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p094rbh3s.css';
import '../../css/a/a13kl-b9p.css';
import '../../css/v/vem5sib9h.css';
import '../../css/d/dyw35kcce.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="p094rbh3s"/><path clip-rule="evenodd" class="a13kl-b9p"/><path class="vem5sib9h"/><path clip-rule="evenodd" class="dyw35kcce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:shipping-box-2-flat"} {...others} />);
}

export default Component;
