import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4s8_1r5m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o4s8_1r5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:location-outline"} {...others} />);
}

export default Component;
