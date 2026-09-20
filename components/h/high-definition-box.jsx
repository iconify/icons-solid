import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kd_g14sid.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kd_g14sid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:high-definition-box"} {...others} />);
}

export default Component;
