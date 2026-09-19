import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7_t3jbcz.css';
import '../../css/u/u2b-m9bbv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y7_t3jbcz"/><path class="u2b-m9bbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:chatbubbles"} {...others} />);
}

export default Component;
