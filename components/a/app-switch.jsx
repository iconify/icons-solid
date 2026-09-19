import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pin4pqb9k.css';
import '../../css/z/z_n1vqbki.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="pin4pqb9k"/><path class="z_n1vqbki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:app-switch"} {...others} />);
}

export default Component;
