import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dw5w_lbpr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dw5w_lbpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tally-5-bulk-round"} {...others} />);
}

export default Component;
