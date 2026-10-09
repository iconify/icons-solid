import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4-t3sb5t.css';
import '../../css/y/y8hh19bpj.css';
import '../../css/j/j5eu97tgi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w4-t3sb5t"/><path class="y8hh19bpj"/><path class="j5eu97tgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kpi-20-bold"} {...others} />);
}

export default Component;
