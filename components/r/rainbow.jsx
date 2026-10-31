import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iv0i5uk2c.css';
import '../../css/k/k1r99mbvw.css';
import '../../css/p/pt9o2mr1h.css';
import '../../css/i/inrxyjbem.css';
import '../../css/c/ckn517gcp.css';
import '../../css/k/knsr51bbj.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="iv0i5uk2c"/><path class="k1r99mbvw"/><path class="pt9o2mr1h"/><path class="inrxyjbem"/><path class="ckn517gcp"/><path class="knsr51bbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:rainbow"} {...others} />);
}

export default Component;
