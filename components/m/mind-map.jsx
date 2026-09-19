import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e40smhzvj.css';
import '../../css/r/r8_i0xbik.css';
import '../../css/e/eyxukz89o.css';
import '../../css/s/saica4jgu.css';
import '../../css/u/u_pv8abfy.css';
import '../../css/c/chtisd1ma.css';
import '../../css/l/lrc2xxb6d.css';
import '../../css/n/nx1eu15ia.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e40smhzvj"/><circle class="r8_i0xbik"/><g class="eyxukz89o"><circle class="saica4jgu"/><circle class="u_pv8abfy"/><circle class="chtisd1ma"/><circle class="lrc2xxb6d"/><circle class="nx1eu15ia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:mind-map"} {...others} />);
}

export default Component;
