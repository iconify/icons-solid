import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1vz89b1w.css';
import '../../css/z/z5dw2mc_u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r1vz89b1w"/><path class="z5dw2mc_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mouse-bold-duotone"} {...others} />);
}

export default Component;
