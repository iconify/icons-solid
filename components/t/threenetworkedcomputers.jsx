import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xissgenvf.css';
import '../../css/m/m738x2bds.css';
import '../../css/x/xhd_v5y8j.css';
import '../../css/n/n3z4lqnxg.css';
import '../../css/q/qd53pdblg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xissgenvf"/><path class="m738x2bds"/><path class="xhd_v5y8j"/><path class="n3z4lqnxg"/><path class="qd53pdblg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:threenetworkedcomputers"} {...others} />);
}

export default Component;
