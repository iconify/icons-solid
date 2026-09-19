import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/a8_tgdb2a.css';
import '../../css/h/hyn_enbog.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="a8_tgdb2a"/><path class="hyn_enbog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:list-view"} {...others} />);
}

export default Component;
