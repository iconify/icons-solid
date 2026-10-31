import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5ws0xb5u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s5ws0xb5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:fold-horizontal-duotone-round"} {...others} />);
}

export default Component;
