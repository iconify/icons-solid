import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b133qtshg.css';
import '../../css/x/xc8aj3z1k.css';
import '../../css/b/b9e4xccvm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b133qtshg"/><path clip-rule="evenodd" class="xc8aj3z1k"/><path clip-rule="evenodd" class="b9e4xccvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notification-unread-lines-bold"} {...others} />);
}

export default Component;
