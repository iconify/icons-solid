import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/v/v_y4m0_ez.css';
import '../../css/a/a_zfvt5pn.css';
import '../../css/y/yndw3pjie.css';
import '../../css/t/tpxw88bec.css';
import '../../css/q/qd-yj5low.css';
import '../../css/z/zghibhrhz.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsQu0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsQu0)"><path class="v_y4m0_ez"/><path class="a_zfvt5pn"/><path class="yndw3pjie"/><path class="tpxw88bec"/><path class="qd-yj5low"/><path class="zghibhrhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:qu"} {...others} />);
}

export default Component;
