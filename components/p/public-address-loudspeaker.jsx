import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kd9xvfbsl.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="kd9xvfbsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:public-address-loudspeaker"} {...others} />);
}

export default Component;
