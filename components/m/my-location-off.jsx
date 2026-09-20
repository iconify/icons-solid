import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/m/mefbpt.css';
import '../../css/z/zxndow.css';
import '../../css/d/d819nf.css';
import '../../css/l/ln6moz.css';
import '../../css/g/gvraiw.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-54.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-4px.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-pjbx7p.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGbbBwieex"><path class="c5xdmn mefbpt zxndow"/><circle class="d819nf"/><path class="c5xdmn ln6moz zxndow"/><path class="c5xdmn gvraiw oxx-om"/></mask></defs><path mask="url(#SVGbbBwieex)" class="botfzx"/><path class="c5xdmn gd_4-q gvraiw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:my-location-off"} {...others} />);
}

export default Component;
