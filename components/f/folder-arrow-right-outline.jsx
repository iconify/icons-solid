import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c63ibibyp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c63ibibyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:folder-arrow-right-outline"} {...others} />);
}

export default Component;
