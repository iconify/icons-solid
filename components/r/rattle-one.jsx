import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/n5_t02bgg.css';
import '../../css/w/wd1jffbjv.css';
import '../../css/x/x8qkyufxd.css';
import '../../css/e/enjmpnbej.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><circle transform="rotate(40 29.463 16.989)" class="n5_t02bgg"/><path class="wd1jffbjv"/><path class="x8qkyufxd"/><path class="enjmpnbej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rattle-one"} {...others} />);
}

export default Component;
