import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/krf-rdb_i.css';
import '../../css/k/k71ds-5nj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="krf-rdb_i"/><path class="k71ds-5nj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:goblet"} {...others} />);
}

export default Component;
