import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8f5tl6jz.css';
import '../../css/e/e568wybne.css';
import '../../css/i/iq9nxyvhz.css';
import '../../css/b/bpcj3b8rg.css';
import '../../css/k/kdkjsdbjr.css';
import '../../css/n/nt_3igl7z.css';
import '../../css/u/uisz24b9i.css';
import '../../css/i/is3w311ky.css';
import '../../css/w/w7m2f1f1z.css';
import '../../css/c/cvmuodbxy.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="p8f5tl6jz"/><path class="e568wybne"/><path class="iq9nxyvhz"/><path class="bpcj3b8rg"/><path class="kdkjsdbjr"/><path class="nt_3igl7z"/><path class="uisz24b9i"/><path class="is3w311ky"/><path class="w7m2f1f1z"/><path class="cvmuodbxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:deaf-woman-dark-skin-tone"} {...others} />);
}

export default Component;
