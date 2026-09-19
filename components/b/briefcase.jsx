import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/auhvz2c1d.css';
import '../../css/k/kmn_ztb-h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="auhvz2c1d"/><path class="kmn_ztb-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:briefcase"} {...others} />);
}

export default Component;
