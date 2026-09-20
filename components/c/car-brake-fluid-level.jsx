import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kn5b-ilqa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kn5b-ilqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:car-brake-fluid-level"} {...others} />);
}

export default Component;
