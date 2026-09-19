import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/f/f_gjtjbcv.css';
import '../../css/x/x-ekx3b1l.css';
import '../../css/t/twe32ssqr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="f_gjtjbcv"/><path class="x-ekx3b1l"/><path class="twe32ssqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:creative"} {...others} />);
}

export default Component;
