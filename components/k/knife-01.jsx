import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qf-e8ge5n.css';
import '../../css/h/hmpf0b5vz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qf-e8ge5n"/><path class="hmpf0b5vz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:knife-01"} {...others} />);
}

export default Component;
