import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfgcicctr.css';
import '../../css/l/lfowfacnp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sfgcicctr"/><path class="lfowfacnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:checkbox-20-bold"} {...others} />);
}

export default Component;
