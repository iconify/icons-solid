import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8l_jsz-q.css';
import '../../css/r/rodd6kbsx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l8l_jsz-q"/><path class="rodd6kbsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:flag-48-bold"} {...others} />);
}

export default Component;
