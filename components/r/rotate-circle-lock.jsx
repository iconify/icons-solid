import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xoyiombli.css';
import '../../css/k/krd881dju.css';
import '../../css/y/yt4usfxhx.css';
import '../../css/r/rgdep-bwy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xoyiombli"/><path class="krd881dju"/><rect class="yt4usfxhx"/><path class="rgdep-bwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:rotate-circle-lock"} {...others} />);
}

export default Component;
