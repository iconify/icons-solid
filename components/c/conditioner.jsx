import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zq6a9-byn.css';
import '../../css/m/mt6dlxb6n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="zq6a9-byn"/><path class="mt6dlxb6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:conditioner"} {...others} />);
}

export default Component;
