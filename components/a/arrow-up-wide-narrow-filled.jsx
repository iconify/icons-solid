import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3pk7wb9n.css';
import '../../css/d/d325_0h8a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w3pk7wb9n"/><path class="d325_0h8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-up-wide-narrow-filled"} {...others} />);
}

export default Component;
