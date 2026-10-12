import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nqxobn36h.css';
import '../../css/j/jnwituwuv.css';
import '../../css/o/odpx0jw5h.css';
import '../../css/v/v3y7-obqd.css';
import '../../css/a/acda3cbqx.css';
import '../../css/b/bcakps5cj.css';
import '../../css/r/r5--b6bzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="nqxobn36h"/><rect class="jnwituwuv"/><rect class="odpx0jw5h"/><path class="v3y7-obqd"/><path class="acda3cbqx"/><rect class="bcakps5cj"/><path class="r5--b6bzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:usb-port"} {...others} />);
}

export default Component;
