import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpx2bv8xo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lpx2bv8xo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:columns-4-line"} {...others} />);
}

export default Component;
