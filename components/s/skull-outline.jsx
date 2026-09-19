import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v90n_sbfk.css';
import '../../css/r/rs9a2ybyz.css';
import '../../css/g/gnokhxweg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v90n_sbfk"/><path class="rs9a2ybyz"/><path clip-rule="evenodd" class="gnokhxweg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:skull-outline"} {...others} />);
}

export default Component;
