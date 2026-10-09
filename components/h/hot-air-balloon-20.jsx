import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wn8593byb.css';
import '../../css/g/gdm6o-2_d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wn8593byb"/><path class="gdm6o-2_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hot-air-balloon-20"} {...others} />);
}

export default Component;
