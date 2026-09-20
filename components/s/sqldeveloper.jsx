import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkt4g9irv.css';
import '../../css/g/g_c8_jb6c.css';
import '../../css/j/jgjjqf59v.css';
import '../../css/f/fws5csb2j.css';
import '../../css/l/ltfdigwdj.css';
import '../../css/c/cbe1v9beq.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="wkt4g9irv"/><path class="g_c8_jb6c"/><path class="jgjjqf59v"/><path class="fws5csb2j"/><path class="ltfdigwdj"/><path class="cbe1v9beq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sqldeveloper"} {...others} />);
}

export default Component;
