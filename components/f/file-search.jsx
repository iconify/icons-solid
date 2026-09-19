import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/b/bvncembqc.css';
import '../../css/y/yp3vjsbtd.css';
import '../../css/w/wl5jlkvji.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="bvncembqc"/><path class="yp3vjsbtd"/><circle transform="rotate(45 33.485 33.485)" class="wl5jlkvji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:file-search"} {...others} />);
}

export default Component;
