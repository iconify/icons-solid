import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e31ik5bcj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e31ik5bcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:arrow-top-left-bottom-right-bold"} {...others} />);
}

export default Component;
