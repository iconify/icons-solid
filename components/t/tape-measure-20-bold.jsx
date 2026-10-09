import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_x4m8o5k.css';
import '../../css/s/sb9z2f5dz.css';
import '../../css/w/wjkmecbyc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t_x4m8o5k"/><path class="sb9z2f5dz"/><path class="wjkmecbyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tape-measure-20-bold"} {...others} />);
}

export default Component;
