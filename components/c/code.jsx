import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ohtbcybba.css';
import '../../css/i/iqj-84gkn.css';
import '../../css/s/sp0fyfs-h.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ohtbcybba"/><path class="iqj-84gkn"/><path class="sp0fyfs-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:code"} {...others} />);
}

export default Component;
