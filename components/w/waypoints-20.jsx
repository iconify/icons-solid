import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pv9_vcbch.css';
import '../../css/g/glyz50bjm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pv9_vcbch"/><path class="glyz50bjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:waypoints-20"} {...others} />);
}

export default Component;
