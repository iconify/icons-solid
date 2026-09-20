import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/d/dqzzadq8p.css';
import '../../css/t/ta5mxq58w.css';
import '../../css/u/uddmtkbnk.css';
import '../../css/o/otadbabkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="dqzzadq8p"/><path class="ta5mxq58w"/><path class="uddmtkbnk"/><path class="otadbabkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:rock-and-roll-hand"} {...others} />);
}

export default Component;
