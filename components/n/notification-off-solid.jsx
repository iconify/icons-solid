import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/se48-pe8k.css';
import '../../css/r/repczfbpp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="se48-pe8k"/><path clip-rule="evenodd" class="repczfbpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:notification-off-solid"} {...others} />);
}

export default Component;
