import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ex5i2y_lu.css';
import '../../css/k/ka-iktbmz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ex5i2y_lu"/><path class="ka-iktbmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:oven-mitts-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
