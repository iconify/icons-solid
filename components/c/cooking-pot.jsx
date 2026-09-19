import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/p/p5posd0gc.css';
import '../../css/e/e2-3bjb3b.css';
import '../../css/l/liuf54coe.css';
import '../../css/q/qtr4ntb8j.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path clip-rule="evenodd" class="p5posd0gc"/><path class="e2-3bjb3b"/><path class="liuf54coe"/><path class="qtr4ntb8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cooking-pot"} {...others} />);
}

export default Component;
