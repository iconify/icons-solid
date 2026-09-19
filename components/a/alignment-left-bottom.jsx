import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/l/ljdas5boi.css';
import '../../css/y/yzt_xxjga.css';
import '../../css/x/x5wrwz-ra.css';
import '../../css/m/mh1elgghd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><rect class="ljdas5boi"/><path class="yzt_xxjga"/><path class="x5wrwz-ra"/><path class="mh1elgghd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:alignment-left-bottom"} {...others} />);
}

export default Component;
