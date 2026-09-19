import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6q2q6bbg.css';
import '../../css/n/nkmmv-b0e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o6q2q6bbg"/><path class="nkmmv-b0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:volume-2-filled"} {...others} />);
}

export default Component;
