import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/eruy9gp0e.css';
import '../../css/v/vl78f-rdv.css';
import '../../css/j/jwg0a0b6h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="eruy9gp0e"/><path class="vl78f-rdv"/><path class="jwg0a0b6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:min"} {...others} />);
}

export default Component;
