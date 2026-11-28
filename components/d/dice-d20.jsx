import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cox93acsa.css';
import '../../css/y/ym4ec3bcf.css';
import '../../css/w/wkn880b4n.css';
import '../../css/s/spaeb3b8c.css';
import '../../css/r/r7o4cfbdc.css';
import '../../css/n/n6lojwb2d.css';
import '../../css/q/qgq7dwv2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="cox93acsa"/><path class="ym4ec3bcf"/><path class="wkn880b4n"/><path class="spaeb3b8c"/><path class="r7o4cfbdc"/><path class="n6lojwb2d"/><path class="qgq7dwv2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:dice-d20"} {...others} />);
}

export default Component;
