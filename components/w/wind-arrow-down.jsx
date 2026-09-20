import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmc80rbtl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mmc80rbtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:wind-arrow-down"} {...others} />);
}

export default Component;
