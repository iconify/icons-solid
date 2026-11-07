import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kka22lbso.css';
import '../../css/u/u0y1r5zna.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kka22lbso"/><path class="u0y1r5zna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-bold-duotone"} {...others} />);
}

export default Component;
