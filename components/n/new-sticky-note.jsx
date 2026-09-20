import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kd_lxf7ev.css';
import '../../css/y/y7agq5f-m.css';
import '../../css/v/v5ci8l68i.css';
import '../../css/e/e5dr67_pc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="kd_lxf7ev"/><path clip-rule="evenodd" class="y7agq5f-m"/><path class="v5ci8l68i"/><path class="e5dr67_pc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:new-sticky-note"} {...others} />);
}

export default Component;
