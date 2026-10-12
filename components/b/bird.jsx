import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdbmacvwa.css';
import '../../css/e/e91yn_hyv.css';
import '../../css/h/hsha30b5n.css';
import '../../css/y/yp329_vod.css';
import '../../css/d/d6rg-xbtn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zdbmacvwa"/><path class="e91yn_hyv"/><path class="hsha30b5n"/><path class="yp329_vod"/><path class="d6rg-xbtn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bird"} {...others} />);
}

export default Component;
