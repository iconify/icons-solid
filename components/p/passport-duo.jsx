import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/btehxj37s.css';
import '../../css/a/avy2uc1cy.css';
import '../../css/q/qt6bzcc0s.css';
import '../../css/m/mg0ewhtat.css';
import '../../css/j/j4hee5ogj.css';
import '../../css/z/zu_y6tbyc.css';
import '../../css/q/qzj80hbdj.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="btehxj37s"/><path class="avy2uc1cy"/><path class="qt6bzcc0s"/><path class="mg0ewhtat"/><path class="j4hee5ogj"/><path class="zu_y6tbyc"/><path class="qzj80hbdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:passport-duo"} {...others} />);
}

export default Component;
