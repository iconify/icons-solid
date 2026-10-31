import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knisc_b1o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="knisc_b1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:move-diagonal-2-duotone-round"} {...others} />);
}

export default Component;
