import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/ngnbouohf.css';
import '../../css/v/vczvbtb_m.css';
import '../../css/l/lag9-94zr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="ngnbouohf"/><path class="vczvbtb_m"/><path class="lag9-94zr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:lock-one"} {...others} />);
}

export default Component;
