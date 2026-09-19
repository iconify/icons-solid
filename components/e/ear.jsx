import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/few9-1b_a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="few9-1b_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ear"} {...others} />);
}

export default Component;
