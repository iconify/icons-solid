import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/p8vflebyb.css';
import '../../css/e/evhup9oie.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="p8vflebyb"/><rect transform="rotate(45 16.075 29.303)" class="evhup9oie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hair-brush"} {...others} />);
}

export default Component;
