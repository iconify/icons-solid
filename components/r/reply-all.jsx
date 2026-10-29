import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f25aqb1cu.css';
import '../../css/p/pz3wkb9vt.css';
import '../../css/n/nonzebbze.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f25aqb1cu wm-k"/><path class="pz3wkb9vt wm-a"/><path class="nonzebbze wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:reply-all"} {...others} />);
}

export default Component;
