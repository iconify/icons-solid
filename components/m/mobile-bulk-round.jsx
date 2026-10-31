import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxp5dfuyw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cxp5dfuyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mobile-bulk-round"} {...others} />);
}

export default Component;
