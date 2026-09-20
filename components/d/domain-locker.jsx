import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgkrg8bvl.css';
import '../../css/r/r1m3whbhg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cgkrg8bvl"/><path class="r1m3whbhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:domain-locker"} {...others} />);
}

export default Component;
