import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eysowxhrp.css';
import '../../css/s/seio_1p-r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eysowxhrp"/><path class="seio_1p-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bold-20-bold"} {...others} />);
}

export default Component;
