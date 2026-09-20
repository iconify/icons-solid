import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/v/vqelu_bkx.css';
import '../../css/u/u0h_d--dx.css';

const viewBox = {"width":6323,"height":5778};
const content = `<g class="n1mjunbsu"><path class="vqelu_bkx"/><path class="u0h_d--dx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dokploy"} {...others} />);
}

export default Component;
