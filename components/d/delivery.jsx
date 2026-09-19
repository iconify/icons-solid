import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hhhhlpzei.css';
import '../../css/i/i1m49fb9a.css';
import '../../css/l/lflp7ybyo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="hhhhlpzei"/><path class="i1m49fb9a"/><path class="lflp7ybyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:delivery"} {...others} />);
}

export default Component;
