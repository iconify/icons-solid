import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lbk7xcb_i.css';
import '../../css/p/pfy9ymbjm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="lbk7xcb_i"/><path class="pfy9ymbjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:factory-building"} {...others} />);
}

export default Component;
