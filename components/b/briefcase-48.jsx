import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chwqx0x_b.css';
import '../../css/f/fm25kwqqn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="chwqx0x_b"/><path class="fm25kwqqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:briefcase-48"} {...others} />);
}

export default Component;
