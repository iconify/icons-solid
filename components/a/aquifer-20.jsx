import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ijs8fxbia.css';
import '../../css/w/w8537imoy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ijs8fxbia"/><path class="w8537imoy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:aquifer-20"} {...others} />);
}

export default Component;
