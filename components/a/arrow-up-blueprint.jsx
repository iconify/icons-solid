import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fra2v7_xn.css';
import '../../css/a/a3k-1f3du.css';
import '../../css/i/ibko5k8me.css';
import '../../css/k/kl1ci0zzd.css';
import '../../css/p/phmwp8b9d.css';
import '../../css/r/ry8ytjbib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="fra2v7_xn wm-deco"/><path class="a3k-1f3du wm-deco"/><path class="ibko5k8me wm-k"/><path class="kl1ci0zzd wm-a"/><path class="phmwp8b9d wm-k"/><path class="ry8ytjbib wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-up-blueprint"} {...others} />);
}

export default Component;
