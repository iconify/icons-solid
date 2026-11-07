import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wole6hbze.css';
import '../../css/e/egno4qbun.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wole6hbze"/><path class="egno4qbun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fire-bold-duotone"} {...others} />);
}

export default Component;
