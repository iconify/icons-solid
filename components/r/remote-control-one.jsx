import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vhuv2qtwd.css';
import '../../css/n/nh5v92bxj.css';
import '../../css/i/ipwjlpkgk.css';
import '../../css/c/cezu9o53p.css';
import '../../css/f/f-7mwactv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="vhuv2qtwd"/><path class="nh5v92bxj"/><path class="ipwjlpkgk"/><circle class="cezu9o53p"/><circle class="f-7mwactv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:remote-control-one"} {...others} />);
}

export default Component;
