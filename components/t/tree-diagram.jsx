import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/m690ibn-a.css';
import '../../css/l/l8nwq8bnr.css';
import '../../css/r/r1mdubbli.css';
import '../../css/a/a2lpj-bjx.css';
import '../../css/w/ww5-o3blo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="m690ibn-a"/><circle class="l8nwq8bnr"/><circle class="r1mdubbli"/><circle class="a2lpj-bjx"/><path class="ww5-o3blo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:tree-diagram"} {...others} />);
}

export default Component;
