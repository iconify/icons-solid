import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h98b_5bwu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h98b_5bwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:credit-card-clock"} {...others} />);
}

export default Component;
