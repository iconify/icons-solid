import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hwgjwbc3o.css';
import '../../css/w/w-ga6iwfh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="hwgjwbc3o"/><path class="w-ga6iwfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:barber-brush"} {...others} />);
}

export default Component;
