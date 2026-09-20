import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t65_lkbjj.css';
import '../../css/c/cd8updtas.css';
import '../../css/y/y71c1szyb.css';
import '../../css/b/bmts5lb4w.css';
import '../../css/d/dlhqvvbdg.css';

const viewBox = {"width":400,"height":400};
const content = `<g transform="translate(-6.66 100.49)" class="t65_lkbjj"><ellipse transform="matrix(-.3005 .95378 -.96071 -.27755 0 0)" class="cd8updtas"/><ellipse transform="matrix(-.3005 .95378 -.96071 -.27755 0 0)" class="y71c1szyb"/><ellipse transform="matrix(-.95378 -.3005 .27755 -.96071 0 0)" class="bmts5lb4w"/><ellipse transform="matrix(-.95378 -.3005 .27755 -.96071 0 0)" class="dlhqvvbdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:dotjs"} {...others} />);
}

export default Component;
