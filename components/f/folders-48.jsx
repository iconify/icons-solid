import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4-_f1bng.css';
import '../../css/c/ccwmrkkue.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z4-_f1bng"/><path class="ccwmrkkue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folders-48"} {...others} />);
}

export default Component;
