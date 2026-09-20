import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/b/ba_vn-w1a.css';
import '../../css/h/h-u2ohbco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="ba_vn-w1a"/><path class="h-u2ohbco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:circle-left-light"} {...others} />);
}

export default Component;
