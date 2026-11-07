import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4fzscdmy.css';
import '../../css/f/fjjhjc8fm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j4fzscdmy"/><path class="fjjhjc8fm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:alt-arrow-down-bold-duotone"} {...others} />);
}

export default Component;
