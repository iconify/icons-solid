import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ro8eodbyd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ro8eodbyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:zoom-out-outline"} {...others} />);
}

export default Component;
