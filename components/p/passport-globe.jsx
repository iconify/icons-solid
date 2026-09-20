import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fch2tybje.css';
import '../../css/f/f3amrcc4b.css';
import '../../css/w/wnv2tkb0x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fch2tybje"/><path class="f3amrcc4b"/><path class="wnv2tkb0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:passport-globe"} {...others} />);
}

export default Component;
