import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xma2v6a8z.css';
import '../../css/b/bha-fvb6w.css';
import '../../css/o/o2i2dnbou.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="xma2v6a8z"/><path class="bha-fvb6w"/><path clip-rule="evenodd" class="o2i2dnbou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:beach-flat"} {...others} />);
}

export default Component;
