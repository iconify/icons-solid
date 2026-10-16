import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwcpavbfl.css';
import '../../css/v/vcbhgbcuw.css';
import '../../css/r/r9oealbdj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iwcpavbfl"/><path class="vcbhgbcuw"/><path class="r9oealbdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-ship-20-bold"} {...others} />);
}

export default Component;
