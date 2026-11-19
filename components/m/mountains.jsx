import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fjf0rgq0f.css';
import '../../css/x/xrryuoepz.css';
import '../../css/o/og3naoa1l.css';
import '../../css/t/tsmv2xneh.css';
import '../../css/t/tm66hibfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fjf0rgq0f"/><path class="xrryuoepz"/><path class="og3naoa1l"/><path class="tsmv2xneh"/><path class="tm66hibfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mountains"} {...others} />);
}

export default Component;
