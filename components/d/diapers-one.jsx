import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jx4-d-vaj.css';
import '../../css/b/bs-433_bs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="jx4-d-vaj"/><path class="bs-433_bs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:diapers-one"} {...others} />);
}

export default Component;
