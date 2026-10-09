import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0d-k9bod.css';
import '../../css/i/iuszqrjvz.css';
import '../../css/d/d1u5dmb3x.css';
import '../../css/m/m-x3x4itj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w0d-k9bod"/><path class="iuszqrjvz"/><path class="d1u5dmb3x"/><path class="m-x3x4itj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-plus-20"} {...others} />);
}

export default Component;
