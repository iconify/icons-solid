import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/juhcl4g6c.css';
import '../../css/x/xsmvgyraz.css';
import '../../css/c/crcwn-hdf.css';
import '../../css/f/f8vdv-n-j.css';
import '../../css/d/d8n5vv1fr.css';
import '../../css/y/y-0ytjbni.css';
import '../../css/d/dk_4zkb8l.css';
import '../../css/p/p4uhw5blg.css';
import '../../css/p/pqt7q9bud.css';
import '../../css/c/czpqf3b3w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="juhcl4g6c wm-shadow"/><path class="wm-k xsmvgyraz"/><path class="crcwn-hdf wm-k"/><path class="f8vdv-n-j wm-k"/><path class="d8n5vv1fr wm-k"/><path class="wm-k y-0ytjbni"/><path class="dk_4zkb8l wm-shine"/><path class="p4uhw5blg wm-a"/><path class="pqt7q9bud wm-a"/><path class="czpqf3b3w wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:lollipop"} {...others} />);
}

export default Component;
