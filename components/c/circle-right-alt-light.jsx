import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/u06p2nbkp.css';
import '../../css/h/hj2b58qos.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="u06p2nbkp"/><path class="hj2b58qos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:circle-right-alt-light"} {...others} />);
}

export default Component;
