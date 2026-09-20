import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9_jpg2jv.css';
import '../../css/c/c287m3bab.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j9_jpg2jv"/><path clip-rule="evenodd" class="c287m3bab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-duotone"} {...others} />);
}

export default Component;
