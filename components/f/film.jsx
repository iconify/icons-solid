import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k9gwnbbof.css';
import '../../css/h/hewrhxidi.css';
import '../../css/k/kw0z_0bva.css';
import '../../css/e/e44gc8sfa.css';
import '../../css/s/s9j0pvvds.css';
import '../../css/b/bznbmkbyw.css';
import '../../css/t/tagy9xbdf.css';
import '../../css/t/tsu-i5xnd.css';
import '../../css/a/aw6gkbr3t.css';
import '../../css/a/agxp4xbqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k9gwnbbof wm-shadow"/><path class="hewrhxidi wm-k"/><path class="kw0z_0bva wm-k"/><path class="e44gc8sfa wm-k"/><path class="s9j0pvvds wm-k"/><path class="bznbmkbyw wm-k"/><path class="tagy9xbdf wm-shine"/><path class="tsu-i5xnd wm-a"/><path class="aw6gkbr3t wm-a"/><path class="agxp4xbqt wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:film"} {...others} />);
}

export default Component;
