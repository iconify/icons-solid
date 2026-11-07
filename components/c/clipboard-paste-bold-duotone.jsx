import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/df21-2bqu.css';
import '../../css/c/c4946-17v.css';
import '../../css/m/mo43we00a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="df21-2bqu"/><path class="c4946-17v"/><path class="mo43we00a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-paste-bold-duotone"} {...others} />);
}

export default Component;
