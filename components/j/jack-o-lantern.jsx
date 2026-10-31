import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zdw2em7tn.css';
import '../../css/h/hhvpq96jj.css';
import '../../css/p/p-ks_ybmy.css';
import '../../css/r/r_hlfv11p.css';
import '../../css/k/kh9q9dbid.css';
import '../../css/e/em42fur7b.css';
import '../../css/s/slxtksb2n.css';
import '../../css/k/kne2nwp7y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow zdw2em7tn"/><path class="hhvpq96jj wm-s"/><path class="p-ks_ybmy wm-shadow"/><path class="r_hlfv11p"/><path class="kh9q9dbid"/><path class="em42fur7b wm-s"/><path class="slxtksb2n wm-s"/><path class="kne2nwp7y wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:jack-o-lantern"} {...others} />);
}

export default Component;
