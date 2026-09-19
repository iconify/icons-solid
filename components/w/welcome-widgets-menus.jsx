import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9af0yl0h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q9af0yl0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:welcome-widgets-menus"} {...others} />);
}

export default Component;
