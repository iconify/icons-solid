import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grpqfdcxp.css';
import '../../css/i/if6wlcb2s.css';
import '../../css/o/o5sq00_9y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="grpqfdcxp"/><path class="if6wlcb2s"/><path class="o5sq00_9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:eigenfocus"} {...others} />);
}

export default Component;
