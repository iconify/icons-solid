import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nlvuvsydb.css';
import '../../css/p/pum862k0d.css';
import '../../css/t/txt-57beh.css';
import '../../css/y/ywovnsbpk.css';
import '../../css/m/mzuofd_-f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nlvuvsydb"/><path clip-rule="evenodd" class="pum862k0d"/><path class="txt-57beh"/><path class="ywovnsbpk"/><path class="mzuofd_-f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:rainbow"} {...others} />);
}

export default Component;
