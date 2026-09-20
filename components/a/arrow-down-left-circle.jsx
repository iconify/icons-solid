import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qr4x_0bpu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qr4x_0bpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-down-left-circle"} {...others} />);
}

export default Component;
