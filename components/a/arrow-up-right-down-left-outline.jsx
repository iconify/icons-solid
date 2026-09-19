import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k13mh-w9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k13mh-w9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:arrow-up-right-down-left-outline"} {...others} />);
}

export default Component;
