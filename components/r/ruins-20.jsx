import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pycxazbfr.css';
import '../../css/g/g69-1dbht.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pycxazbfr"/><path class="g69-1dbht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ruins-20"} {...others} />);
}

export default Component;
