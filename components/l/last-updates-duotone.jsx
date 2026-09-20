import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-i3y8b7c.css';
import '../../css/e/ecd9gs9sn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h-i3y8b7c"/><path class="ecd9gs9sn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:last-updates-duotone"} {...others} />);
}

export default Component;
