import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nhold6bcw.css';
import '../../css/d/dk55ffbep.css';
import '../../css/d/d5xw9nb-m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="nhold6bcw"/><path clip-rule="evenodd" class="dk55ffbep"/><path class="d5xw9nb-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:hair-outline"} {...others} />);
}

export default Component;
