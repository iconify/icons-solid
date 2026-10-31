import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0f4p2b2w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r0f4p2b2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-up-right-small-bulk-round"} {...others} />);
}

export default Component;
