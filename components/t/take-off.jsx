import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hf-76nbak.css';
import '../../css/q/q0j9tsbql.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="hf-76nbak"/><path class="q0j9tsbql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:take-off"} {...others} />);
}

export default Component;
