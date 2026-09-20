import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/b/bl2413pzu.css';
import '../../css/m/m5vqg1b3x.css';

const viewBox = {"width":576,"height":619};
const content = `<g class="n1mjunbsu"><path class="bl2413pzu"/><path class="m5vqg1b3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:orildo"} {...others} />);
}

export default Component;
