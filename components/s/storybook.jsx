import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6_q2dyiy.css';
import '../../css/q/q2inojbkd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c6_q2dyiy"/><path class="q2inojbkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:storybook"} {...others} />);
}

export default Component;
