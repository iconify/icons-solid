import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ri43c8k7n.css';
import '../../css/z/z2f80nbkt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ri43c8k7n"/><path class="z2f80nbkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:look-up-line"} {...others} />);
}

export default Component;
