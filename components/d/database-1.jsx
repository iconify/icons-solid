import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kl5vzlbeh.css';
import '../../css/f/f_ke3lb8f.css';
import '../../css/w/wnizvsbrr.css';
import '../../css/w/wkgrmwbkn.css';
import '../../css/c/cvby0_bwx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kl5vzlbeh"/><path class="f_ke3lb8f"/><path class="wnizvsbrr"/><path class="wkgrmwbkn"/><path class="cvby0_bwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:database-1"} {...others} />);
}

export default Component;
