import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/ki-wvxb6o.css';
import '../../css/x/xeywp5yyl.css';
import '../../css/s/sjvkn5w2h.css';
import '../../css/k/k-c12xbxd.css';
import '../../css/x/xq6wqwbjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ki-wvxb6o"/><path class="wm-shine xeywp5yyl"/><path class="sjvkn5w2h wm-k"/><path class="k-c12xbxd wm-a"/><path class="wm-deco xq6wqwbjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:rabbit"} {...others} />);
}

export default Component;
