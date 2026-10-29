import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eb5ltkbul.css';
import '../../css/g/g6qgqxezo.css';
import '../../css/v/vioieb06c.css';
import '../../css/p/pfwk5xe4m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eb5ltkbul wm-a"/><path class="g6qgqxezo wm-a"/><path class="vioieb06c wm-a"/><path class="pfwk5xe4m wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:notepad-text"} {...others} />);
}

export default Component;
