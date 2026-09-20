import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/is9eh2bmt.css';
import '../../css/k/ki7ftx34p.css';
import '../../css/r/rjh5ftb2x.css';
import '../../css/x/xr9mtabdg.css';
import '../../css/d/daf01ho3r.css';
import '../../css/j/jvvrpwbxo.css';
import '../../css/r/rpio0dblx.css';
import '../../css/j/jenx8nycs.css';
import '../../css/h/hxdq8bczz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="is9eh2bmt"/><path class="ki7ftx34p"/><path class="rjh5ftb2x"/><path class="xr9mtabdg"/><path class="daf01ho3r"/><path class="jvvrpwbxo"/><path class="rpio0dblx"/><path class="jenx8nycs"/><path class="hxdq8bczz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:dog"} {...others} />);
}

export default Component;
