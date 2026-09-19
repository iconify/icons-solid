import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/prvg-xbay.css';
import '../../css/x/x0yq8fapu.css';
import '../../css/n/ny1ve4bvd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="prvg-xbay"/><path class="x0yq8fapu"/><path class="ny1ve4bvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:shop"} {...others} />);
}

export default Component;
