import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjw5bmbkb.css';
import '../../css/g/gy2b850nw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vjw5bmbkb"/><path class="gy2b850nw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:map-20"} {...others} />);
}

export default Component;
