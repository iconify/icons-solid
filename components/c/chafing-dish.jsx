import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/d2rpgdn0m.css';
import '../../css/w/w84haqb_y.css';
import '../../css/v/vddxckb1a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="d2rpgdn0m"/><path class="w84haqb_y"/><path class="vddxckb1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:chafing-dish"} {...others} />);
}

export default Component;
