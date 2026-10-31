import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mnlu7groz.css';
import '../../css/c/ctkssrb4p.css';
import '../../css/c/c0ra1xmbv.css';
import '../../css/p/pji95kflm.css';
import '../../css/c/cpu21_gkk.css';
import '../../css/y/ye7lwuhvg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="mnlu7groz"/><path class="ctkssrb4p"/><path class="c0ra1xmbv"/><path class="pji95kflm"/><path class="cpu21_gkk"/><path class="ye7lwuhvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:education-globe-pop"} {...others} />);
}

export default Component;
