import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7azacbot.css';
import '../../css/z/zmqo05bbh.css';
import '../../css/n/n0bl6zbqp.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/k/ktc_dd8dl.css';
import '../../css/z/zkkiystws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="y7azacbot"/><path class="zmqo05bbh"/><path class="n0bl6zbqp"/><g class="av3m8fbrw"><path class="ktc_dd8dl"/><path class="zkkiystws"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mushroom"} {...others} />);
}

export default Component;
