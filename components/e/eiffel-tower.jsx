import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/m/m2sxpk2xj.css';
import '../../css/i/iqqrywyfk.css';
import '../../css/p/p_7e51buh.css';
import '../../css/v/vkg2c0bwx.css';
import '../../css/f/fjklgibbs.css';
import '../../css/g/gr7bfcb4k.css';
import '../../css/d/dylqz1b1y.css';
import '../../css/j/j89lbvbxh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="m2sxpk2xj"/><path class="iqqrywyfk"/><path class="p_7e51buh"/><path class="vkg2c0bwx"/><path class="fjklgibbs"/><path class="gr7bfcb4k"/><path class="dylqz1b1y"/><path class="j89lbvbxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:eiffel-tower"} {...others} />);
}

export default Component;
