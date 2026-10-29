import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgpj70gsv.css';
import '../../css/w/w9roay2om.css';
import '../../css/r/rw-zvrb5l.css';
import '../../css/b/bxpm86bkk.css';
import '../../css/h/hx27tko-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wgpj70gsv wm-a"/><path class="w9roay2om wm-a"/><path class="rw-zvrb5l wm-k"/><path class="bxpm86bkk wm-k"/><path class="hx27tko-b wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:apple"} {...others} />);
}

export default Component;
