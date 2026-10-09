import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsveq9qwk.css';
import '../../css/j/jfh5rkbay.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tsveq9qwk"/><path class="jfh5rkbay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pram-48-bold"} {...others} />);
}

export default Component;
