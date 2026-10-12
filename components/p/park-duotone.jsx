import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g853k9bhz.css';
import '../../css/d/dn9ejacmb.css';
import '../../css/b/bv275hb_v.css';
import '../../css/c/cdxfhdbni.css';
import '../../css/n/ndcuwebrz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g853k9bhz"/><path class="dn9ejacmb"/><path class="bv275hb_v"/><path class="cdxfhdbni"/><path class="ndcuwebrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:park-duotone"} {...others} />);
}

export default Component;
