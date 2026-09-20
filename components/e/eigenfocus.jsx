import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lx0y__vby.css';
import '../../css/m/mpdhyabli.css';
import '../../css/o/o5sq00_9y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lx0y__vby"/><path class="mpdhyabli"/><path class="o5sq00_9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:eigenfocus"} {...others} />);
}

export default Component;
