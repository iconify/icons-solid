import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rrbcwybsn.css';
import '../../css/x/xci45cnkx.css';
import '../../css/s/s585j5b6i.css';
import '../../css/s/s78wgswbm.css';
import '../../css/q/qyj_m3jrw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rrbcwybsn"/><path class="xci45cnkx"/><path class="s585j5b6i"/><path class="s78wgswbm"/><path class="qyj_m3jrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:printer-3d-duotone"} {...others} />);
}

export default Component;
