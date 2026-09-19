import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfr5lhbab.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mfr5lhbab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:doughnut-chart"} {...others} />);
}

export default Component;
