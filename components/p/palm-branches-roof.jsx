import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qjvxjmbwg.css';
import '../../css/x/x6w9hggfg.css';
import '../../css/x/x367sephh.css';
import '../../css/o/oolgf6c-d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="qjvxjmbwg"/><path clip-rule="evenodd" class="x6w9hggfg"/><path class="x367sephh"/><path class="oolgf6c-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:palm-branches-roof"} {...others} />);
}

export default Component;
