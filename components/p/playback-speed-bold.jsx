import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ai3i1kb5k.css';
import '../../css/h/h34kibbvp.css';
import '../../css/t/t_-ae6ize.css';
import '../../css/d/dt8sml-7w.css';
import '../../css/u/uod10pbew.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ai3i1kb5k"/><path class="h34kibbvp"/><path class="t_-ae6ize"/><path class="dt8sml-7w"/><path class="uod10pbew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playback-speed-bold"} {...others} />);
}

export default Component;
