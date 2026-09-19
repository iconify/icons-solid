import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k6qaytbfd.css';
import '../../css/j/j8oj_fbju.css';
import '../../css/h/h0vhqgbae.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="k6qaytbfd"/><path clip-rule="evenodd" class="j8oj_fbju"/><path clip-rule="evenodd" class="h0vhqgbae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:rural-post-alt2x-outline"} {...others} />);
}

export default Component;
