import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4maro1xq.css';
import '../../css/y/y8xv1v9hl.css';
import '../../css/t/t4wa6sbad.css';
import '../../css/z/zkc3a6ybf.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g4maro1xq"/><path class="y8xv1v9hl"/><path class="t4wa6sbad"/><path class="zkc3a6ybf"/><path class="pycxazbfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tripod-foundation-20"} {...others} />);
}

export default Component;
