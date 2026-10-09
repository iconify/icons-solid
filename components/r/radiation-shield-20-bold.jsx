import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdw3vx8xp.css';
import '../../css/e/e1hzf-y8n.css';
import '../../css/f/fdsiutbrn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fdw3vx8xp"/><path class="e1hzf-y8n"/><path class="fdsiutbrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:radiation-shield-20-bold"} {...others} />);
}

export default Component;
