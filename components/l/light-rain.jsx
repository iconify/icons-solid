import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/w5etd2brv.css';
import '../../css/u/umkaskbkl.css';
import '../../css/z/zw_1krbon.css';
import '../../css/m/mvo8mccin.css';
import '../../css/n/nb4s8nbzp.css';
import '../../css/b/b04cps37t.css';
import '../../css/p/pture14tp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="w5etd2brv"/><path class="umkaskbkl"/><path class="zw_1krbon"/><path class="mvo8mccin"/><path class="nb4s8nbzp"/><path class="b04cps37t"/><path class="pture14tp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:light-rain"} {...others} />);
}

export default Component;
