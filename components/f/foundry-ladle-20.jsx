import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3j2ttbri.css';
import '../../css/w/w0ahlnbjy.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o3j2ttbri"/><path class="w0ahlnbjy"/><path class="pycxazbfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:foundry-ladle-20"} {...others} />);
}

export default Component;
