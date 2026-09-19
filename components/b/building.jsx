import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zl_c1zqrx.css';
import '../../css/u/unud4-b6i.css';
import '../../css/u/uha_3w82g.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="zl_c1zqrx"/><path class="unud4-b6i"/><path class="uha_3w82g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:building"} {...others} />);
}

export default Component;
