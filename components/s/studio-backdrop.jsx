import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pmln3v0ih.css';
import '../../css/w/w_q6dk-pb.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pmln3v0ih"/><path class="w_q6dk-pb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:studio-backdrop"} {...others} />);
}

export default Component;
