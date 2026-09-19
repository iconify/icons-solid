import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/caw1diebi.css';
import '../../css/s/sxij2rbwq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="caw1diebi"/><path class="sxij2rbwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:egg-yolk"} {...others} />);
}

export default Component;
