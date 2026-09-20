import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rgk1ydrjl.css';
import '../../css/m/md5v2cc2g.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="rgk1ydrjl"/><path class="md5v2cc2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:building"} {...others} />);
}

export default Component;
