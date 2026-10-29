import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/t46nd_b7v.css';
import '../../css/b/b4zzipb8w.css';
import '../../css/s/sfvyxjmsv.css';
import '../../css/b/bfd9jmbir.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="t46nd_b7v wm-k"/><path class="b4zzipb8w wm-a"/><path class="sfvyxjmsv wm-k"/><path class="bfd9jmbir wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:swap-sketch"} {...others} />);
}

export default Component;
