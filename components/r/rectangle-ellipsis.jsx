import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2stvjbaw.css';
import '../../css/o/ofz4unbfd.css';
import '../../css/b/bkz_asyfi.css';
import '../../css/u/uawjy9b_m.css';
import '../../css/h/hb7q41b8n.css';
import '../../css/l/l2ed0tf4z.css';
import '../../css/h/ha7ls0ruw.css';
import '../../css/o/offpaqbwn.css';
import '../../css/v/v2qc40bqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k2stvjbaw wm-shadow"/><path class="ofz4unbfd wm-k"/><path class="bkz_asyfi wm-k"/><path class="uawjy9b_m wm-k"/><path class="hb7q41b8n wm-k"/><path class="l2ed0tf4z wm-k"/><path class="ha7ls0ruw wm-shine"/><path class="offpaqbwn wm-k"/><path class="v2qc40bqk wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:rectangle-ellipsis"} {...others} />);
}

export default Component;
