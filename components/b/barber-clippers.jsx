import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/cwxxxccvd.css';
import '../../css/m/mz6gfbc4a.css';
import '../../css/g/g0etr6b-w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="cwxxxccvd"/><rect class="mz6gfbc4a"/><path class="g0etr6b-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:barber-clippers"} {...others} />);
}

export default Component;
