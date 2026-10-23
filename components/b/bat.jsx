import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lq82r8ber.css';
import '../../css/q/q725rxjsb.css';
import '../../css/z/zd5r3hb3k.css';
import '../../css/r/r44ibcclq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lq82r8ber"/><path class="q725rxjsb"/><path class="zd5r3hb3k"/><path class="r44ibcclq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bat"} {...others} />);
}

export default Component;
