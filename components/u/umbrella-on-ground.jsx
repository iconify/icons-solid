import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sk-h9b3te.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="sk-h9b3te"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:umbrella-on-ground"} {...others} />);
}

export default Component;
