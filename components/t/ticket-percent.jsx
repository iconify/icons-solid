import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/ao_c3l20n.css';
import '../../css/b/b-8a_ebkj.css';
import '../../css/q/q-55d_bvt.css';
import '../../css/s/sq9ejvb2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ao_c3l20n"/><path class="b-8a_ebkj wm-shine"/><path class="q-55d_bvt wm-k"/><path class="sq9ejvb2i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:ticket-percent"} {...others} />);
}

export default Component;
