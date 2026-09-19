import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/m/m9phv6bok.css';
import '../../css/x/xm-kbrsxz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="m9phv6bok"/><path class="xm-kbrsxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:bullet-map"} {...others} />);
}

export default Component;
