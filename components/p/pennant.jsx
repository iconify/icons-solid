import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/s9v3gsb7k.css';
import '../../css/g/gcv9n7b1n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="s9v3gsb7k"/><path class="gcv9n7b1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:pennant"} {...others} />);
}

export default Component;
