import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/abw25i37u.css';
import '../../css/z/zvam9_6dv.css';
import '../../css/x/xlqhjmgvg.css';
import '../../css/w/ww9mq5bio.css';
import '../../css/l/l337sqpxf.css';
import '../../css/j/jqe4vybjj.css';
import '../../css/m/mc8gfgbaj.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="abw25i37u"/><path class="zvam9_6dv"/><path class="xlqhjmgvg"/><path class="ww9mq5bio"/><path class="l337sqpxf"/><path class="jqe4vybjj"/><path class="mc8gfgbaj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-sn"} {...others} />);
}

export default Component;
