import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyf8j3bsu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eyf8j3bsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:lock-outline"} {...others} />);
}

export default Component;
