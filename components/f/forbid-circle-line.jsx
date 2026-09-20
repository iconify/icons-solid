import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db0ssxsmu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="db0ssxsmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:forbid-circle-line"} {...others} />);
}

export default Component;
