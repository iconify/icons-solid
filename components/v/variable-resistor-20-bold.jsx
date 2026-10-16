import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7_v_006l.css';
import '../../css/o/ort-_6bff.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g7_v_006l"/><path class="ort-_6bff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:variable-resistor-20-bold"} {...others} />);
}

export default Component;
