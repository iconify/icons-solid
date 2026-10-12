import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/decyyub_r.css';
import '../../css/z/zz5z_zbiw.css';
import '../../css/d/d880qybrj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="decyyub_r"/><path class="zz5z_zbiw"/><path class="d880qybrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drum-20"} {...others} />);
}

export default Component;
