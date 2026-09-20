import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stcn1sxby.css';
import '../../css/e/e38yvhatw.css';
import '../../css/w/w7z2db7iy.css';
import '../../css/h/hpbxf-vje.css';
import '../../css/j/ju1kfvbcq.css';
import '../../css/n/n6ivrbb7t.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="stcn1sxby"/><path class="e38yvhatw"/><path clip-rule="evenodd" class="w7z2db7iy"/><path class="hpbxf-vje"/><path class="ju1kfvbcq"/><path class="n6ivrbb7t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:printer"} {...others} />);
}

export default Component;
