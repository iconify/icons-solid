import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dg-3gv.css';
import '../../css/g/g_1xrq.css';
import '../../css/o/o77nnc.css';
import '../../css/g/gefjcf.css';
import '../../css/p/po5j-h.css';
import '../../css/g/gba_zk.css';
import '../../css/s/so-from-32.css';
import '../../css/f/fade-to-1.css';
import '../../css/t/tr-l6a01f.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dg-3gv g_1xrq o77nnc"/><path class="gefjcf o77nnc"/><path class="g_1xrq o77nnc po5j-h"/><path class="g_1xrq gba_zk o77nnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:downloading"} {...others} />);
}

export default Component;
