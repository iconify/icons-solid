import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ttbiemmoy.css';
import '../../css/n/nppz1hb8c.css';
import '../../css/u/u-e397iod.css';
import '../../css/e/em61a5bdc.css';
import '../../css/c/c220-3h5q.css';
import '../../css/o/ob0igcbuy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ttbiemmoy"/><path class="nppz1hb8c"/><path class="u-e397iod"/><path class="em61a5bdc"/><path class="c220-3h5q"/><path class="ob0igcbuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:airdrop-box-duo"} {...others} />);
}

export default Component;
