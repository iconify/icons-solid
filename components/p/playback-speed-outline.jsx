import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grfgbmbna.css';
import '../../css/d/dt8sml-7w.css';
import '../../css/t/t_-ae6ize.css';
import '../../css/h/h34kibbvp.css';
import '../../css/h/ho4ucccvl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="grfgbmbna"/><path class="dt8sml-7w"/><path class="t_-ae6ize"/><path class="h34kibbvp"/><path clip-rule="evenodd" class="ho4ucccvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playback-speed-outline"} {...others} />);
}

export default Component;
