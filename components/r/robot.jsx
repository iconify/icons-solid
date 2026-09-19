import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/n2u8ozbbq.css';
import '../../css/y/y-qb6bbqh.css';
import '../../css/m/mybdgyglo.css';
import '../../css/t/t1x3gbbjf.css';
import '../../css/u/uohyxirab.css';
import '../../css/c/csyqkzb7q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><rect class="n2u8ozbbq"/><path class="y-qb6bbqh"/><circle class="mybdgyglo"/><circle class="t1x3gbbjf"/><rect class="uohyxirab"/><path class="csyqkzb7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:robot"} {...others} />);
}

export default Component;
