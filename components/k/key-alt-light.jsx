import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/nnccshiyx.css';
import '../../css/s/s1lz20b_y.css';
import '../../css/y/ycejrvbwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="nnccshiyx"/><circle class="s1lz20b_y"/><path class="ycejrvbwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:key-alt-light"} {...others} />);
}

export default Component;
