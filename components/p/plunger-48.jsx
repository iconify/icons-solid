import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqsth4bzo.css';
import '../../css/l/linospgqs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yqsth4bzo"/><path class="linospgqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plunger-48"} {...others} />);
}

export default Component;
