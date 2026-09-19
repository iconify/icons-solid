import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/ve2fb11kn.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="ve2fb11kn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:left-arrow-circled-filled"} {...others} />);
}

export default Component;
