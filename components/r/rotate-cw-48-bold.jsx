import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed2wdwblh.css';
import '../../css/y/y2dquhbch.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ed2wdwblh"/><path class="y2dquhbch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rotate-cw-48-bold"} {...others} />);
}

export default Component;
