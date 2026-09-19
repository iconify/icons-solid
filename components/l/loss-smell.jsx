import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/glmqoxo2g.css';
import '../../css/t/tgi27dstf.css';
import '../../css/b/bs4c_4bsg.css';
import '../../css/q/q8p-vyb-d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="glmqoxo2g"/><path class="tgi27dstf"/><path clip-rule="evenodd" class="bs4c_4bsg"/><path class="q8p-vyb-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:loss-smell"} {...others} />);
}

export default Component;
