import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhz_pd5hu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mhz_pd5hu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:list-chevrons-down-up-fill"} {...others} />);
}

export default Component;
