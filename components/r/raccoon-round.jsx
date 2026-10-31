import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srjdv2b0w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="srjdv2b0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:raccoon-round"} {...others} />);
}

export default Component;
