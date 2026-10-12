import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1b4s504g.css';
import '../../css/o/o-cy3-bgi.css';
import '../../css/v/vxcz8bbin.css';
import '../../css/u/u0_qkbcpi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n1b4s504g"/><path class="o-cy3-bgi"/><path class="vxcz8bbin"/><path class="u0_qkbcpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:broom-20"} {...others} />);
}

export default Component;
