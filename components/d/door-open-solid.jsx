import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qd6dxr9fm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qd6dxr9fm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:door-open-solid"} {...others} />);
}

export default Component;
