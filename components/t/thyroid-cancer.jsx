import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/isx5lwb9m.css';
import '../../css/o/oqd-n_bbx.css';
import '../../css/c/cjof1mbpw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="isx5lwb9m"/><path clip-rule="evenodd" class="oqd-n_bbx"/><path class="cjof1mbpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:thyroid-cancer"} {...others} />);
}

export default Component;
