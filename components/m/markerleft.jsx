import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrt19zwtp.css';

const viewBox = {"width":1024,"height":768};
const content = `<path class="xrt19zwtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:markerleft"} {...others} />);
}

export default Component;
