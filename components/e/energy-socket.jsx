import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/dc3vmxbte.css';
import '../../css/c/c0yckqbit.css';
import '../../css/i/iaiylo83l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="dc3vmxbte"/><path class="c0yckqbit"/><path class="iaiylo83l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:energy-socket"} {...others} />);
}

export default Component;
