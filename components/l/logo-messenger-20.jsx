import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5ehvrl0n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q5ehvrl0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:logo-messenger-20"} {...others} />);
}

export default Component;
