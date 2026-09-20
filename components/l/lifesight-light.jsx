import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/k/kx3vpdb-a.css';
import '../../css/o/o6x0pbbwb.css';

const viewBox = {"width":237,"height":66};
const content = `<g class="n1mjunbsu"><path class="kx3vpdb-a"/><path class="o6x0pbbwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lifesight-light"} {...others} />);
}

export default Component;
