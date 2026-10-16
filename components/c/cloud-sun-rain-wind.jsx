import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/af85et9ie.css';
import '../../css/g/go148f1nh.css';
import '../../css/x/xkq31acit.css';
import '../../css/c/cno5lzbwt.css';
import '../../css/z/zgxp76txc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="af85et9ie"/><path class="go148f1nh"/><path class="xkq31acit"/><path class="cno5lzbwt"/><path class="zgxp76txc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-sun-rain-wind"} {...others} />);
}

export default Component;
