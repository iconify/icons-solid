import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db2i566jf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="db2i566jf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:vending-machine-with-cigarette-with-smoke-curl"} {...others} />);
}

export default Component;
