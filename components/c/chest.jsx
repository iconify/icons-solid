import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/f/fvdzt3gko.css';
import '../../css/c/cf9111btq.css';
import '../../css/t/t7r4q8bkq.css';
import '../../css/c/cnhoddn-u.css';
import '../../css/n/noggrib5f.css';
import '../../css/w/w6ev0zvwv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="fvdzt3gko"/><path class="cf9111btq"/><path class="t7r4q8bkq"/><path class="cnhoddn-u"/><path class="noggrib5f"/><path class="w6ev0zvwv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chest"} {...others} />);
}

export default Component;
