import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/q/qtol5qfed.css';
import '../../css/m/mjwf5pbes.css';
import '../../css/h/hbrh-185r.css';
import '../../css/f/fp8k69iis.css';
import '../../css/p/pzeggsxly.css';
import '../../css/w/wz0qr3bvr.css';
import '../../css/c/c4loz2bcc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="qtol5qfed"/><rect class="mjwf5pbes"/><path class="hbrh-185r"/><path class="fp8k69iis"/><rect class="pzeggsxly"/><rect class="wz0qr3bvr"/><path class="c4loz2bcc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:network-tree"} {...others} />);
}

export default Component;
