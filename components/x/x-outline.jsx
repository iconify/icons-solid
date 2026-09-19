import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/odzar8bfb.css';
import '../../css/q/qq8e05b9i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="x-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="odzar8bfb"/><path class="qq8e05b9i"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:x-outline"} {...others} />);
}

export default Component;
