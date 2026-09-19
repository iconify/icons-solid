import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6f34bfwl.css';
import '../../css/n/nud8t5e2d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w6f34bfwl"/><path clip-rule="evenodd" class="nud8t5e2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:lock-outline"} {...others} />);
}

export default Component;
