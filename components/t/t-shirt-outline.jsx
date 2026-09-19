import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jc_2esbxu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jc_2esbxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:t-shirt-outline"} {...others} />);
}

export default Component;
