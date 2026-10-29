import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vlt2onblj.css';
import '../../css/i/i39gejnmb.css';
import '../../css/k/kg2irmbhn.css';
import '../../css/n/ngslmpbzu.css';
import '../../css/k/k-k6k285a.css';
import '../../css/k/kj_-zqb7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="vlt2onblj wm-deco"/><path class="i39gejnmb wm-deco"/><path class="kg2irmbhn wm-k"/><path class="ngslmpbzu wm-a"/><path class="k-k6k285a wm-s"/><path class="kj_-zqb7o wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:video-plus-blueprint"} {...others} />);
}

export default Component;
