import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2vz0_yun.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i2vz0_yun"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:frame-off"} {...others} />);
}

export default Component;
