import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0p_z2l_o.css';
import '../../css/u/uc7c22fiu.css';
import '../../css/o/oxf-v8-ae.css';
import '../../css/d/d1ccs6skz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t0p_z2l_o"/><path class="uc7c22fiu"/><path class="oxf-v8-ae"/><path class="d1ccs6skz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-kchat"} {...others} />);
}

export default Component;
