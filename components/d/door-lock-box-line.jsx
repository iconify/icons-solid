import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l92q-gx-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l92q-gx-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:door-lock-box-line"} {...others} />);
}

export default Component;
