import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/nh5-ytbod.css';
import '../../css/s/s045mdb9e.css';
import '../../css/q/qj7v9lbcd.css';
import '../../css/o/ols_87btu.css';
import '../../css/k/kg6-vmgwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="nh5-ytbod"/><path class="s045mdb9e wm-shine"/><path class="qj7v9lbcd wm-k"/><path class="ols_87btu wm-a"/><path class="kg6-vmgwc wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:heart-balloon"} {...others} />);
}

export default Component;
