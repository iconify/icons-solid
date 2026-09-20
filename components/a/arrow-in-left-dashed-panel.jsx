import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cn7d8btfu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cn7d8btfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-in-left-dashed-panel"} {...others} />);
}

export default Component;
