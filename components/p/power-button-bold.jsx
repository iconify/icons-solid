import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdq7f1w4s.css';
import '../../css/k/kbhx_-s8m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gdq7f1w4s"/><path class="kbhx_-s8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:power-button-bold"} {...others} />);
}

export default Component;
