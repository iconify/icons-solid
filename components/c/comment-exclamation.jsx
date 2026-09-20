import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kc_ggwbfn.css';
import '../../css/n/nzf-rrbnz.css';
import '../../css/u/ups1br8xq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kc_ggwbfn"/><path class="nzf-rrbnz"/><circle class="ups1br8xq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:comment-exclamation"} {...others} />);
}

export default Component;
