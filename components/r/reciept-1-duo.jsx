import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zikajmxqo.css';
import '../../css/f/fgf5h_bco.css';
import '../../css/r/ruo2lvbss.css';
import '../../css/s/stveu4pdn.css';
import '../../css/s/shzs8mb1f.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="zikajmxqo"><path class="fgf5h_bco"/><path class="ruo2lvbss"/><path class="stveu4pdn"/><path class="shzs8mb1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:reciept-1-duo"} {...others} />);
}

export default Component;
