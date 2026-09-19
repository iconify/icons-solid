import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a39x7accg.css';
import '../../css/w/w3pk7wb9n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a39x7accg"/><path class="w3pk7wb9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-up-narrow-wide-filled"} {...others} />);
}

export default Component;
