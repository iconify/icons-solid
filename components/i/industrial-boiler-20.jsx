import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwuwdzb4d.css';
import '../../css/b/bxnfngy9v.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kwuwdzb4d"/><path class="bxnfngy9v"/><path class="pycxazbfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:industrial-boiler-20"} {...others} />);
}

export default Component;
