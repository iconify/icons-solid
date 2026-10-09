import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvf62xf5g.css';
import '../../css/k/k-8tebcux.css';
import '../../css/g/gz2x7rbpo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vvf62xf5g"/><path class="k-8tebcux"/><path class="gz2x7rbpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:screw-20-bold"} {...others} />);
}

export default Component;
