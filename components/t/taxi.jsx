import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dcvl96buf.css';
import '../../css/p/pb1z62j3d.css';
import '../../css/c/cuim9ybqv.css';
import '../../css/x/xrh7xacua.css';
import '../../css/z/zzt0d4bku.css';
import '../../css/c/c90c0jbtb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dcvl96buf"/><path class="pb1z62j3d"/><path class="cuim9ybqv"/><circle class="xrh7xacua"/><circle class="zzt0d4bku"/><path class="c90c0jbtb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:taxi"} {...others} />);
}

export default Component;
