import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvggpac7z.css';
import '../../css/p/pt1xasq3j.css';
import '../../css/j/j7xgo46fb.css';
import '../../css/m/mfbw6v_op.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wvggpac7z"/><path class="pt1xasq3j"/><path class="j7xgo46fb"/><path class="mfbw6v_op"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-key-48"} {...others} />);
}

export default Component;
