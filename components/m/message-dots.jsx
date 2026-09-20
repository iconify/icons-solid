import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w__oz7bxg.css';
import '../../css/k/k_lqyobox.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w__oz7bxg"/><path class="k_lqyobox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:message-dots"} {...others} />);
}

export default Component;
