import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrdvcwidb.css';
import '../../css/h/h3ssicb8h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrdvcwidb"/><path clip-rule="evenodd" class="h3ssicb8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mention-circle-bold-duotone"} {...others} />);
}

export default Component;
