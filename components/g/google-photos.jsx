import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j556dzyel.css';
import '../../css/n/nvgsxqn9s.css';
import '../../css/l/lukm4y7qu.css';
import '../../css/w/w2vc9ib5u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j556dzyel"/><path class="nvgsxqn9s"/><path class="lukm4y7qu"/><path class="w2vc9ib5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-photos"} {...others} />);
}

export default Component;
