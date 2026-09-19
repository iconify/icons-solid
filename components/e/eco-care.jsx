import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v2-rbeb8t.css';
import '../../css/q/qaohmrikg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="v2-rbeb8t"/><path clip-rule="evenodd" class="qaohmrikg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:eco-care"} {...others} />);
}

export default Component;
