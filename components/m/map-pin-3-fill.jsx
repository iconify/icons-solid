import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygif3dzbs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ygif3dzbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:map-pin-3-fill"} {...others} />);
}

export default Component;
