import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-vry1bva.css';
import '../../css/m/m-4cng7zq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d-vry1bva"/><path class="m-4cng7zq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sim-card-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
