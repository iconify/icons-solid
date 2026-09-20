import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwzl3txuc.css';
import '../../css/h/h6lz9tb0p.css';
import '../../css/g/g7lr5zb8x.css';

const viewBox = {"width":107.384,"height":38.975};
const content = `<g class="jwzl3txuc"><path class="h6lz9tb0p"/><path class="g7lr5zb8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:european-space-agency"} {...others} />);
}

export default Component;
