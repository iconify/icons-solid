import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvv4a8b1q.css';
import '../../css/x/x10nznbcw.css';
import '../../css/x/xtyg9db9j.css';
import '../../css/h/hk04vm_3c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mvv4a8b1q"/><path class="x10nznbcw"/><path class="xtyg9db9j"/><path class="hk04vm_3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-tablet-x"} {...others} />);
}

export default Component;
