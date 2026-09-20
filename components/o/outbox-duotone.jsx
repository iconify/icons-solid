import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df7pajbkm.css';
import '../../css/n/n6jizwbwn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="df7pajbkm"/><path class="n6jizwbwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:outbox-duotone"} {...others} />);
}

export default Component;
