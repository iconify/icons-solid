import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xgk8dwbbn.css';
import '../../css/a/armh1275t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="xgk8dwbbn"/><path clip-rule="evenodd" class="armh1275t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:coronary-care-unit-outline"} {...others} />);
}

export default Component;
