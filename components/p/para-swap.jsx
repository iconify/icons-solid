import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kx7v_41ey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kx7v_41ey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:para-swap"} {...others} />);
}

export default Component;
