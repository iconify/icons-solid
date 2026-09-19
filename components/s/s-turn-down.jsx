import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/w/wo_zr_q_a.css';
import '../../css/s/szey3hb9c.css';
import '../../css/e/e7i2pvoaw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="wo_zr_q_a"/><path class="szey3hb9c"/><circle class="e7i2pvoaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:s-turn-down"} {...others} />);
}

export default Component;
