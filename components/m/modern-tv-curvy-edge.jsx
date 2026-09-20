import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hkqhezb-a.css';
import '../../css/r/r781fxbff.css';
import '../../css/x/xpvvzbg0g.css';
import '../../css/v/va2chsbro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hkqhezb-a"/><path class="r781fxbff"/><path class="xpvvzbg0g"/><path class="va2chsbro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:modern-tv-curvy-edge"} {...others} />);
}

export default Component;
