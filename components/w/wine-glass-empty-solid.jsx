import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yj9b4dbld.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yj9b4dbld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:wine-glass-empty-solid"} {...others} />);
}

export default Component;
