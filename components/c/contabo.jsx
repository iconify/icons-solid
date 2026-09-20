import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nh62o1bhk.css';
import '../../css/g/g3nrwvb9p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nh62o1bhk"/><path class="g3nrwvb9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:contabo"} {...others} />);
}

export default Component;
