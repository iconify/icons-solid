import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyh0s5bvl.css';
import '../../css/c/ciel5gbic.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dyh0s5bvl"/><path class="ciel5gbic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:wells-fargo"} {...others} />);
}

export default Component;
