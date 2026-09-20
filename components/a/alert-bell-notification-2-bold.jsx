import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/my86mbcer.css';
import '../../css/v/v5iwbub1h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="my86mbcer"/><path class="v5iwbub1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:alert-bell-notification-2-bold"} {...others} />);
}

export default Component;
