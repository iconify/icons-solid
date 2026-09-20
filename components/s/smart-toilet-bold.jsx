import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy7fz0b3h.css';
import '../../css/s/snw44201m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gy7fz0b3h"/><path class="snw44201m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:smart-toilet-bold"} {...others} />);
}

export default Component;
