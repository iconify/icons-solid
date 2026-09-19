import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9xvhi_ms.css';
import '../../css/k/klel7eb6s.css';
import '../../css/k/kbm6mcvob.css';
import '../../css/h/hdvqf-lhq.css';
import '../../css/u/umgviorqx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i9xvhi_ms"/><path class="klel7eb6s"/><path class="kbm6mcvob"/><path class="hdvqf-lhq"/><path class="umgviorqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-test-lab"} {...others} />);
}

export default Component;
