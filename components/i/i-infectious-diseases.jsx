import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lg9xpcbkq.css';
import '../../css/u/u-l7qbbnx.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="lg9xpcbkq"/><path class="u-l7qbbnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-infectious-diseases"} {...others} />);
}

export default Component;
