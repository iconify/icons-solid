import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tckmnk8cc.css';
import '../../css/a/a69e3-bxq.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="tckmnk8cc"/><path class="a69e3-bxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:reticle"} {...others} />);
}

export default Component;
