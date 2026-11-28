import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6y21mb4q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u6y21mb4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sidebar-right-expand-solid"} {...others} />);
}

export default Component;
