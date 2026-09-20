import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f-nfw68nc.css';
import '../../css/c/c4shklb7z.css';
import '../../css/r/rvg1ddc-m.css';
import '../../css/h/hi5e58bpt.css';
import '../../css/y/ya67w9bsf.css';
import '../../css/i/ias6r87lw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f-nfw68nc"/><path class="c4shklb7z"/><path class="rvg1ddc-m"/><path class="hi5e58bpt"/><path class="ya67w9bsf"/><path class="ias6r87lw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playlist-2-broken"} {...others} />);
}

export default Component;
