import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rsrdufbut.css';
import '../../css/m/mcjp-yqnp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="rotate-right-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="rsrdufbut"/><path class="mcjp-yqnp"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:rotate-right-outline"} {...others} />);
}

export default Component;
