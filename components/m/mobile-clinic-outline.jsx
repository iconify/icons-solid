import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/or2ri1bom.css';
import '../../css/u/ubfreac_o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="or2ri1bom"/><path clip-rule="evenodd" class="ubfreac_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:mobile-clinic-outline"} {...others} />);
}

export default Component;
