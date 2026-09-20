import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/caldd_r-k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="caldd_r-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:android-auto"} {...others} />);
}

export default Component;
