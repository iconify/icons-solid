import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/znrpuji4k.css';
import '../../css/m/mwzyskgks.css';
import '../../css/f/fp2ytl5nf.css';
import '../../css/h/hv77mauqn.css';
import '../../css/u/udd3bbc2x.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="znrpuji4k"/><circle class="mwzyskgks"/><circle class="fp2ytl5nf"/><path class="hv77mauqn"/><g class="udd3bbc2x"><circle class="mwzyskgks"/><circle class="fp2ytl5nf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:crossed-flags"} {...others} />);
}

export default Component;
