import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d51d4d4ea.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d51d4d4ea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:map-simple-destination-line"} {...others} />);
}

export default Component;
