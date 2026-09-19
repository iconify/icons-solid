import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s84y2xbes.css';
import '../../css/o/o_chobbkh.css';
import '../../css/m/max6-rbtw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s84y2xbes"/><path class="o_chobbkh"/><path clip-rule="evenodd" class="max6-rbtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:diarrhea-outline"} {...others} />);
}

export default Component;
