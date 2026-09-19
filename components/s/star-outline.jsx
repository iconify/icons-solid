import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qoe8j9jwn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qoe8j9jwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:star-outline"} {...others} />);
}

export default Component;
