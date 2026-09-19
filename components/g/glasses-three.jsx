import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/y88yxebix.css';
import '../../css/x/xji954c1a.css';
import '../../css/d/dk0uorbci.css';
import '../../css/m/mo94rtywa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="y88yxebix"/><path class="xji954c1a"/><circle class="dk0uorbci"/><path class="mo94rtywa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:glasses-three"} {...others} />);
}

export default Component;
