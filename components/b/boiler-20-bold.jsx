import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elie8f57q.css';
import '../../css/o/ov2o_f2qf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="elie8f57q"/><path class="ov2o_f2qf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:boiler-20-bold"} {...others} />);
}

export default Component;
