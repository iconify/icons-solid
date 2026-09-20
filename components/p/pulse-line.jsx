import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xx2_oc7fr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xx2_oc7fr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:pulse-line"} {...others} />);
}

export default Component;
