import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z0j84d65r.css';
import '../../css/z/zppkvmnta.css';
import '../../css/h/h_5z42bwt.css';
import '../../css/x/x86hb0k8m.css';
import '../../css/t/t3yb03tfx.css';
import '../../css/e/eahbf8vlp.css';
import '../../css/o/o_4kmtbva.css';
import '../../css/c/cgdxtvpwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k z0j84d65r"/><path class="wm-k zppkvmnta"/><path class="h_5z42bwt wm-k"/><path class="wm-shine x86hb0k8m"/><path class="t3yb03tfx wm-a"/><path class="eahbf8vlp wm-a"/><path class="o_4kmtbva wm-a"/><path class="cgdxtvpwo wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:chart-pie"} {...others} />);
}

export default Component;
