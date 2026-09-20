import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/m/m4323mbpj.css';
import '../../css/z/ztv518apv.css';
import '../../css/o/oqs28yqrn.css';
import '../../css/s/s6o-nsu4u.css';
import '../../css/x/xtyg2bban.css';
import '../../css/c/cl0ufumul.css';
import '../../css/f/f_3n2dgxp.css';
import '../../css/s/s155tqb_h.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="m4323mbpj"/><path class="ztv518apv"/><path class="oqs28yqrn"/><path class="s6o-nsu4u"/><path class="xtyg2bban"/><path class="cl0ufumul"/><path class="f_3n2dgxp"/><path class="s155tqb_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:view-mail"} {...others} />);
}

export default Component;
