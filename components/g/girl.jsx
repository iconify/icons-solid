import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/uydmr-psq.css';
import '../../css/a/a2s6o-byq.css';
import '../../css/u/uettqb7vg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><circle class="uydmr-psq"/><path class="a2s6o-byq"/><path class="uettqb7vg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:girl"} {...others} />);
}

export default Component;
