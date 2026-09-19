import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/g/gy89sobrg.css';
import '../../css/y/ybvr_gb5s.css';
import '../../css/h/hm_tt5a8i.css';
import '../../css/f/fuc7djkee.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="gy89sobrg"/><path class="ybvr_gb5s"/><circle class="hm_tt5a8i"/><path class="fuc7djkee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:people-search-one"} {...others} />);
}

export default Component;
