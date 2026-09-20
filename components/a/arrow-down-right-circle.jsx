import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p57so_sum.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p57so_sum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-down-right-circle"} {...others} />);
}

export default Component;
