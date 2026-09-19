import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/su3eclbrf.css';
import '../../css/d/d29i29jal.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><rect class="su3eclbrf"/><path class="d29i29jal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:perfumer-bottle"} {...others} />);
}

export default Component;
