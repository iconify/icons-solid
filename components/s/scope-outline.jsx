import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lk35y-bvr.css';
import '../../css/c/cn5-l9bdz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="scope-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="lk35y-bvr"/><path class="cn5-l9bdz"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:scope-outline"} {...others} />);
}

export default Component;
