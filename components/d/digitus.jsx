import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qp97c3bgd.css';
import '../../css/x/xzk0f8bqn.css';
import '../../css/s/s438uqbxg.css';

const viewBox = {"width":89.668,"height":81.905};
const content = `<g class="qp97c3bgd"><path class="xzk0f8bqn"/><path class="s438uqbxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:digitus"} {...others} />);
}

export default Component;
