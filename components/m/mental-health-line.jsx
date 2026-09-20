import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnyn49jdo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hnyn49jdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:mental-health-line"} {...others} />);
}

export default Component;
