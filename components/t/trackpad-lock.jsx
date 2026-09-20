import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nt1ol5ibt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nt1ol5ibt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:trackpad-lock"} {...others} />);
}

export default Component;
