import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/up7axvmbo.css';
import '../../css/s/sri7sjbgb.css';
import '../../css/m/m8pcsohdi.css';
import '../../css/f/fqnrezbxf.css';
import '../../css/j/j8sz6hb2h.css';
import '../../css/e/ev9c8rboa.css';
import '../../css/q/qss0debzg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="up7axvmbo"/><path class="sri7sjbgb"/><path class="m8pcsohdi wm-shine"/><path class="fqnrezbxf wm-k"/><path class="j8sz6hb2h wm-a"/><path class="ev9c8rboa"/><path class="qss0debzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:spy"} {...others} />);
}

export default Component;
