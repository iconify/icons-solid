import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hx-qo_bxx.css';
import '../../css/r/rkz29bcvl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="hx-qo_bxx"/><circle class="rkz29bcvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:connect-address-one"} {...others} />);
}

export default Component;
