import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sjbtdlbte.css';
import '../../css/p/p4p-khh7q.css';
import '../../css/g/gak6hqmct.css';
import '../../css/x/xw_me4vft.css';
import '../../css/g/g2qaiez3p.css';
import '../../css/y/yy3x_wbfl.css';
import '../../css/m/mclnenbrg.css';
import '../../css/k/kt5rggb1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="sjbtdlbte"/><path class="p4p-khh7q"/><path class="gak6hqmct wm-shine"/><path class="wm-k xw_me4vft"/><path class="g2qaiez3p wm-a"/><path class="yy3x_wbfl"/><path class="mclnenbrg"/><path class="kt5rggb1u wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:rectangle-ellipsis"} {...others} />);
}

export default Component;
