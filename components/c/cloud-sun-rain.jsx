import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tt1i28l9m.css';
import '../../css/g/go148f1nh.css';
import '../../css/p/pep4eu4vt.css';
import '../../css/c/cno5lzbwt.css';
import '../../css/z/zgxp76txc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tt1i28l9m"/><path class="go148f1nh"/><path class="pep4eu4vt"/><path class="cno5lzbwt"/><path class="zgxp76txc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-sun-rain"} {...others} />);
}

export default Component;
