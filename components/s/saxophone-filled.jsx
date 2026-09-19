import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8w7s9gyh.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="a8w7s9gyh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:saxophone-filled"} {...others} />);
}

export default Component;
