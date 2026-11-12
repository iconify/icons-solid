import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksigsecyg.css';
import '../../css/y/y-4aifk4k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ksigsecyg"/><path class="y-4aifk4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pf2etools"} {...others} />);
}

export default Component;
