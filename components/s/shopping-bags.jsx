import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3-m1jbcu.css';
import '../../css/q/q45ggwbcb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r3-m1jbcu"/><path class="q45ggwbcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:shopping-bags"} {...others} />);
}

export default Component;
