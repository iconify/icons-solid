import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/l_5w5bxzf.css';
import '../../css/d/djgmrab9u.css';
import '../../css/w/whl-mbhit.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="l_5w5bxzf"/><circle class="djgmrab9u"/><path class="whl-mbhit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:camera-five"} {...others} />);
}

export default Component;
