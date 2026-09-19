import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vq_301b6z.css';
import '../../css/k/kfn3jqb2z.css';
import '../../css/c/cx13d1iqo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="vq_301b6z"/><path clip-rule="evenodd" class="kfn3jqb2z"/><path class="cx13d1iqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pregnant-0812w"} {...others} />);
}

export default Component;
