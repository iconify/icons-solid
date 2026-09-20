import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vdzfyij1w.css';
import '../../css/g/gjfw4jbqd.css';
import '../../css/j/ji-tg2b8v.css';
import '../../css/g/gbfiqqboj.css';
import '../../css/f/fm19o8biu.css';
import '../../css/z/zsuclwbnx.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vdzfyij1w"/><path clip-rule="evenodd" class="gjfw4jbqd"/><path clip-rule="evenodd" class="ji-tg2b8v"/><path clip-rule="evenodd" class="gbfiqqboj"/><path clip-rule="evenodd" class="fm19o8biu"/><path class="zsuclwbnx"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:down-up-circle-off"} {...others} />);
}

export default Component;
