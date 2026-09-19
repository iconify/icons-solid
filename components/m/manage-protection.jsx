import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ey3vbs2kb.css';
import '../../css/m/mx54xpbau.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ey3vbs2kb"/><path class="mx54xpbau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:manage-protection"} {...others} />);
}

export default Component;
