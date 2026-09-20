import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/wgxss4bmx.css';
import '../../css/p/p0mqrqbqq.css';
import '../../css/n/n-43q0bzf.css';
import '../../css/b/bilazermh.css';
import '../../css/q/qfuk2974r.css';
import '../../css/c/c9-ctdqyw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="wgxss4bmx"/><path class="p0mqrqbqq"/><path class="n-43q0bzf"/><path class="bilazermh"/><path class="qfuk2974r"/><path class="c9-ctdqyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:notebook"} {...others} />);
}

export default Component;
