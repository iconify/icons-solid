import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eb_frobnd.css';
import '../../css/l/l557xacfx.css';
import '../../css/q/qqhr9r1-v.css';
import '../../css/l/ljju7f6ra.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eb_frobnd"/><path class="l557xacfx"/><path class="qqhr9r1-v"/><path class="ljju7f6ra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:package"} {...others} />);
}

export default Component;
