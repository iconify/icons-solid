import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmecbubtg.css';
import '../../css/q/qqeg1x_1x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pmecbubtg"/><path class="qqeg1x_1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:robot-2-filled"} {...others} />);
}

export default Component;
