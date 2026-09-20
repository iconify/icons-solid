import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x71lr6bbc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x71lr6bbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:gesture-swipe-up"} {...others} />);
}

export default Component;
