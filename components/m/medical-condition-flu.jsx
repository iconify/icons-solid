import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t958swnjc.css';
import '../../css/q/qp6nnp00v.css';
import '../../css/e/enof6wbch.css';
import '../../css/c/csfgutbgb.css';
import '../../css/g/gg_qhpbtr.css';
import '../../css/u/ufawscrus.css';
import '../../css/r/r8jyu-a-z.css';
import '../../css/u/uvlrzdbuo.css';
import '../../css/m/mgni55z2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t958swnjc"/><path class="qp6nnp00v"/><path class="enof6wbch"/><path class="csfgutbgb"/><path class="gg_qhpbtr"/><path class="ufawscrus"/><path class="r8jyu-a-z"/><path class="uvlrzdbuo"/><path class="mgni55z2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:medical-condition-flu"} {...others} />);
}

export default Component;
