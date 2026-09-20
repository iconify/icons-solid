import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qssgocp3o.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8_ye8s0b.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/k/kizgv9b-r.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGA3txeXlP" class="qssgocp3o"/></defs><g class="ft5dv1b6b"><path class="u8_ye8s0b"/><use href="#SVGA3txeXlP"/><use href="#SVGA3txeXlP" class="av3m8fbrw"/><path class="kizgv9b-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:shimen"} {...others} />);
}

export default Component;
