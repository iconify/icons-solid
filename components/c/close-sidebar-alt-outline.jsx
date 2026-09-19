import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbu_oejkh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rbu_oejkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:close-sidebar-alt-outline"} {...others} />);
}

export default Component;
