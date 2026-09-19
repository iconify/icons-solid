import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rs1g-shrt.css';
import '../../css/q/q63igh2hi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="rs1g-shrt"/><path class="q63igh2hi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:take-off-one"} {...others} />);
}

export default Component;
