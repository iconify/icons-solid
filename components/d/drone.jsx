import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjgf24xcc.css';
import '../../css/t/tnr1r2bpw.css';
import '../../css/k/kpl8omk-w.css';
import '../../css/s/sfk_gc3qx.css';
import '../../css/p/p4cbj11-t.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="yjgf24xcc"/><path class="tnr1r2bpw"/><path class="kpl8omk-w"/><path class="sfk_gc3qx"/><path class="p4cbj11-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:drone"} {...others} />);
}

export default Component;
