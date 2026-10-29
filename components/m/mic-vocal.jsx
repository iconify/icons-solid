import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b6xnejb7p.css';
import '../../css/w/wmwmqub6u.css';
import '../../css/a/athzdm_5y.css';
import '../../css/p/p4vdcdc_j.css';
import '../../css/l/lcv6p1nmf.css';
import '../../css/c/cbl7z4btu.css';
import '../../css/d/dhomvcqje.css';
import '../../css/s/sd3tcob3r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b6xnejb7p wm-shadow"/><path class="wm-k wmwmqub6u"/><path class="athzdm_5y wm-k"/><path class="p4vdcdc_j wm-k"/><path class="lcv6p1nmf wm-k"/><path class="cbl7z4btu wm-shine"/><path class="dhomvcqje wm-k"/><path class="sd3tcob3r wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:mic-vocal"} {...others} />);
}

export default Component;
