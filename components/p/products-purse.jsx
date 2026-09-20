import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zdidwyb-t.css';
import '../../css/u/uamm_orcn.css';
import '../../css/l/lkbnthxfu.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zdidwyb-t"/><path class="uamm_orcn"/><path class="lkbnthxfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:products-purse"} {...others} />);
}

export default Component;
