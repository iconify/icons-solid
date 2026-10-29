import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/nra1zkb7a.css';
import '../../css/t/tjzruubsi.css';
import '../../css/k/kwopvubne.css';
import '../../css/w/wl8b95u1o.css';
import '../../css/n/n6a_rbk0t.css';
import '../../css/e/eahm661og.css';
import '../../css/x/xjsjgsb9j.css';
import '../../css/r/rvhjhhg9m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="nra1zkb7a wm-shadow"/><path class="tjzruubsi"/><path class="kwopvubne"/><path class="wl8b95u1o"/><path class="n6a_rbk0t"/><path class="eahm661og"/><path class="xjsjgsb9j"/><path class="rvhjhhg9m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chart-bar-decreasing"} {...others} />);
}

export default Component;
