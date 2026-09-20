import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zwowgwa1j.css';
import '../../css/q/q4802bb6x.css';
import '../../css/s/sro7nv68c.css';
import '../../css/p/pkck6zbrt.css';
import '../../css/e/ehk36dbwr.css';
import '../../css/h/hie20wbxy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zwowgwa1j"/><path class="q4802bb6x"/><path class="sro7nv68c"/><path class="pkck6zbrt"/><path class="ehk36dbwr"/><path class="hie20wbxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:rocket"} {...others} />);
}

export default Component;
