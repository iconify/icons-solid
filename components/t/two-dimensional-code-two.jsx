import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/lnvutvb4y.css';
import '../../css/s/sstindttr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="lnvutvb4y"/><path class="sstindttr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:two-dimensional-code-two"} {...others} />);
}

export default Component;
