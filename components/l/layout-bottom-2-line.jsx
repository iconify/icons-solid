import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/ssxhl_u_x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ssxhl_u_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:layout-bottom-2-line"} {...others} />);
}

export default Component;
