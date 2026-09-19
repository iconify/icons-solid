import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/sb_r789-u.css';
import '../../css/z/zhgmyyzqz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="sb_r789-u"/><path class="zhgmyyzqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:clothes-crew-neck"} {...others} />);
}

export default Component;
