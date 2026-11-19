import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vxnlivbfp.css';
import '../../css/k/kicuifboc.css';
import '../../css/w/wvx5iqbpd.css';
import '../../css/b/bi5tad37q.css';
import '../../css/d/dnnjksbak.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vxnlivbfp"/><path class="kicuifboc"/><circle class="wvx5iqbpd"/><path class="bi5tad37q"/><path class="dnnjksbak"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dish-washer"} {...others} />);
}

export default Component;
