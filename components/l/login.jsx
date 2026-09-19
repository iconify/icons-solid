import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/a5xlq5btl.css';
import '../../css/s/seyzirbrl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="a5xlq5btl"/><path class="seyzirbrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:login"} {...others} />);
}

export default Component;
