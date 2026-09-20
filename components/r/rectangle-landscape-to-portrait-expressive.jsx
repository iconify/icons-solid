import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cums48bhj.css';
import '../../css/q/qjh5qom2y.css';
import '../../css/i/ixx5fvb6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cums48bhj"/><path clip-rule="evenodd" class="qjh5qom2y"/><path class="ixx5fvb6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:rectangle-landscape-to-portrait-expressive"} {...others} />);
}

export default Component;
