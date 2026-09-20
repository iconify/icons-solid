import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qc-5hgb0u.css';
import '../../css/l/lpdbfxb1e.css';
import '../../css/h/hrgcmib9c.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="qc-5hgb0u"/><path class="lpdbfxb1e"/><path class="hrgcmib9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bandage"} {...others} />);
}

export default Component;
