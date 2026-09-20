import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvbrlhbqe.css';
import '../../css/l/lk-fajbek.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pvbrlhbqe"/><path class="lk-fajbek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:prunemate"} {...others} />);
}

export default Component;
