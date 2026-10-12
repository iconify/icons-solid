import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xeh2-4bai.css';
import '../../css/s/s8q5ribee.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xeh2-4bai"/><path class="s8q5ribee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:stapler-48"} {...others} />);
}

export default Component;
