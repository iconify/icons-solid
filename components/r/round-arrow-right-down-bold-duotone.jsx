import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c77vne7ui.css';
import '../../css/a/aawp35beb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c77vne7ui"/><path class="aawp35beb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-arrow-right-down-bold-duotone"} {...others} />);
}

export default Component;
