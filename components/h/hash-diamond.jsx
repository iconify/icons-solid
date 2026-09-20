import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir1wpry2n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ir1wpry2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:hash-diamond"} {...others} />);
}

export default Component;
