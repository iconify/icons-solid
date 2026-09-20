import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tlbqtgb5w.css';
import '../../css/u/uj6tkibgl.css';
import '../../css/e/e_u1ccbbi.css';
import '../../css/k/ku2clobmt.css';
import '../../css/j/jdk8l0bme.css';
import '../../css/l/le3uwzzyg.css';
import '../../css/c/cc3riwhmf.css';
import '../../css/j/jmrnp5bmu.css';
import '../../css/v/velhsmbni.css';
import '../../css/g/g9f_sd14l.css';
import '../../css/n/npte3rbai.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)"><path class="tlbqtgb5w"/><path class="uj6tkibgl"/><path class="e_u1ccbbi"/><path class="ku2clobmt"/><path class="jdk8l0bme"/><path class="le3uwzzyg"/><path class="cc3riwhmf"/><path class="jmrnp5bmu"/><path class="velhsmbni"/><path class="g9f_sd14l"/><path class="npte3rbai"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:world-nature-duo"} {...others} />);
}

export default Component;
