import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-c0av85g.css';
import '../../css/r/r1m3whbhg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n-c0av85g"/><path class="r1m3whbhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:domain-locker"} {...others} />);
}

export default Component;
