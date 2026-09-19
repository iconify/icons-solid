import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9vabkbmi.css';
import '../../css/x/xqpsfqrcy.css';
import '../../css/t/t_ee__bsk.css';
import '../../css/l/lpbjt_eld.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m9vabkbmi"/><path class="xqpsfqrcy"/><path class="t_ee__bsk"/><path class="lpbjt_eld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-stats"} {...others} />);
}

export default Component;
