import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/h/hwsal5q-o.css';
import '../../css/j/jq12r3_6g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="hwsal5q-o"/><path class="jq12r3_6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:world-alt-light"} {...others} />);
}

export default Component;
