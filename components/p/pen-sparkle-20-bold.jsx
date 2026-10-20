import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vttjpyben.css';
import '../../css/c/c4mkapibv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vttjpyben"/><path class="c4mkapibv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pen-sparkle-20-bold"} {...others} />);
}

export default Component;
