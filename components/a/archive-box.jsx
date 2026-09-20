import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/j0ncmcjjw.css';
import '../../css/y/yfisyo05d.css';
import '../../css/l/l17pv8bgf.css';
import '../../css/g/gxny_0c_b.css';
import '../../css/r/rh7edmbmo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="j0ncmcjjw"/><path class="yfisyo05d"/><path class="l17pv8bgf"/><path class="gxny_0c_b"/><path class="rh7edmbmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:archive-box"} {...others} />);
}

export default Component;
