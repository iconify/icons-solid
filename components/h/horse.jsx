import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yo93lmb2j.css';
import '../../css/n/nh_pdvb5m.css';
import '../../css/g/g8ni9tbxa.css';
import '../../css/j/jl8-g1ble.css';
import '../../css/z/zglv-ty5x.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="yo93lmb2j"/><path class="nh_pdvb5m"/><path class="g8ni9tbxa"/><path class="jl8-g1ble"/><path class="zglv-ty5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:horse"} {...others} />);
}

export default Component;
