import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohfan4oud.css';
import '../../css/b/b-_nic0_j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ohfan4oud"/><path class="b-_nic0_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-point-bold-duotone"} {...others} />);
}

export default Component;
