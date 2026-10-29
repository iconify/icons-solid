import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vm23nj9rp.css';
import '../../css/m/m2bzfy6-u.css';
import '../../css/g/g5qr6-bxa.css';
import '../../css/m/m0dzyqufg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vm23nj9rp wm-k"/><path class="m2bzfy6-u wm-a"/><path class="g5qr6-bxa wm-k"/><path class="m0dzyqufg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cactus-sketch"} {...others} />);
}

export default Component;
