import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zb72lhfyq.css';
import '../../css/q/qlna7zb6g.css';
import '../../css/o/ogtql0ebh.css';
import '../../css/l/l3jilhb5f.css';
import '../../css/m/mrulj6byy.css';
import '../../css/s/syyyt0b_z.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zb72lhfyq"/><path class="qlna7zb6g"/><path class="ogtql0ebh"/><path class="l3jilhb5f"/><path class="mrulj6byy"/><path class="syyyt0b_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:politics-speech"} {...others} />);
}

export default Component;
