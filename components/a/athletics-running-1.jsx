import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cai1w8b7s.css';
import '../../css/e/ep93y634t.css';
import '../../css/z/z_49t8baq.css';
import '../../css/f/fzlh25bgk.css';
import '../../css/z/zghikbc_y.css';
import '../../css/i/i0dnjtdwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cai1w8b7s"/><path class="ep93y634t"/><path class="z_49t8baq"/><path class="fzlh25bgk"/><path class="zghikbc_y"/><path class="i0dnjtdwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:athletics-running-1"} {...others} />);
}

export default Component;
