import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nfegpe3kx.css';
import '../../css/e/ejhrpmb7e.css';
import '../../css/d/dl7nm1bnq.css';
import '../../css/i/ivnfvxbna.css';
import '../../css/v/vno_1ozcy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nfegpe3kx"/><path class="ejhrpmb7e"/><path class="dl7nm1bnq"/><path class="ivnfvxbna"/><path class="vno_1ozcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-greenhouse-20-bold"} {...others} />);
}

export default Component;
