import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arg7gzb5i.css';
import '../../css/q/quqfatciu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="arg7gzb5i"/><path class="quqfatciu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:joystick"} {...others} />);
}

export default Component;
