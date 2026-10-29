import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3dgdimif.css';
import '../../css/r/rjla032nt.css';
import '../../css/r/rb6uxlbqz.css';
import '../../css/j/jct_xxifs.css';
import '../../css/s/s4txclbaz.css';
import '../../css/t/t8uxqgbaq.css';
import '../../css/l/l12qr-bdy.css';
import '../../css/p/pn7gq_i3q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w3dgdimif wm-shadow"/><path class="rjla032nt wm-k"/><path class="rb6uxlbqz wm-k"/><path class="jct_xxifs wm-k"/><path class="s4txclbaz wm-k"/><path class="t8uxqgbaq wm-k"/><path class="l12qr-bdy wm-shine"/><path class="pn7gq_i3q wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:spider-web"} {...others} />);
}

export default Component;
