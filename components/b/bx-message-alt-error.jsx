import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_30szf3s.css';
import '../../css/m/myoip7bjv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q_30szf3s"/><path class="myoip7bjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-message-alt-error"} {...others} />);
}

export default Component;
