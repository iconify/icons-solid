import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sio63qb3e.css';
import '../../css/g/gz4rmvf3e.css';
import '../../css/c/ciui2qe_b.css';
import '../../css/z/zif4qpbus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="sio63qb3e wm-s"/><path class="gz4rmvf3e wm-k"/><path class="ciui2qe_b wm-s"/><path class="wm-deco zif4qpbus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:text-sparkles"} {...others} />);
}

export default Component;
