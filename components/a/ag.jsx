import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/erm2vobey.css';
import '../../css/k/kuo4zjb-i.css';
import '../../css/b/bwwe5i45d.css';
import '../../css/n/n7jcfbcoz.css';
import '../../css/q/q805p_b3m.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="erm2vobey"/><path class="kuo4zjb-i"/><path class="bwwe5i45d"/><path class="n7jcfbcoz"/><path class="q805p_b3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ag"} {...others} />);
}

export default Component;
