import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/aum-cbcot.css';
import '../../css/w/wxzxs73et.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="aum-cbcot"/><path class="wxzxs73et"/><line x1="6" x2="6" y1="12.5" y2="11.5"/><line x1="6" x2="6" y1="18" y2="17"/><line x1="6" x2="6" y1="7" y2="6"/><line x1="42" x2="42" y1="12.5" y2="11.5"/><line x1="42" x2="42" y1="18" y2="17"/><line x1="42" x2="42" y1="7" y2="6"/><line x1="42" x2="41" y1="18" y2="18"/><line x1="7" x2="6" y1="18" y2="18"/><line x1="7" x2="6" y1="6" y2="6"/><line x1="14" x2="13" y1="6" y2="6"/><line x1="21" x2="20" y1="6" y2="6"/><line x1="21" x2="20" y1="18" y2="18"/><line x1="28" x2="27" y1="6" y2="6"/><line x1="14" x2="13" y1="18" y2="18"/><line x1="28" x2="27" y1="18" y2="18"/><line x1="35" x2="34" y1="6" y2="6"/><line x1="35" x2="34" y1="18" y2="18"/><line x1="42" x2="41" y1="6" y2="6"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:add-item"} {...others} />);
}

export default Component;
