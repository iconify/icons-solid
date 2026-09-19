import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob12t-xdm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ob12t-xdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:phoenix-pendant"} {...others} />);
}

export default Component;
