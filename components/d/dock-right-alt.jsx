import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h30_pj2ow.css';
import '../../css/t/tmh0ewb2e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h30_pj2ow"/><path class="tmh0ewb2e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dock-right-alt"} {...others} />);
}

export default Component;
