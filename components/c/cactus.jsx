import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3upehnfm.css';
import '../../css/y/ytrimltns.css';
import '../../css/y/y12l1jb4g.css';
import '../../css/x/x75z9zpxb.css';
import '../../css/o/oipdcgyvp.css';
import '../../css/q/qd7pctbfq.css';
import '../../css/s/sdzmahbnx.css';
import '../../css/i/icluppbfj.css';
import '../../css/g/gkm0d5b1d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w3upehnfm wm-shadow"/><path class="wm-k ytrimltns"/><path class="wm-k y12l1jb4g"/><path class="wm-k x75z9zpxb"/><path class="oipdcgyvp wm-k"/><path class="qd7pctbfq wm-k"/><path class="sdzmahbnx wm-shine"/><path class="icluppbfj wm-a"/><path class="gkm0d5b1d wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:cactus"} {...others} />);
}

export default Component;
