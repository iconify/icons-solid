import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6kyv-7dy.css';
import '../../css/k/k033u8bmd.css';
import '../../css/a/apa-nuboc.css';
import '../../css/t/t2ol4rbbp.css';
import '../../css/g/gjzzc-b5h.css';
import '../../css/e/e_4h_dc1n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t6kyv-7dy"/><path class="k033u8bmd"/><path class="apa-nuboc"/><path class="t2ol4rbbp"/><path class="gjzzc-b5h"/><path class="e_4h_dc1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:krusader"} {...others} />);
}

export default Component;
