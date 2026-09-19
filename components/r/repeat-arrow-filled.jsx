import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n22-7p18b.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="n22-7p18b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:repeat-arrow-filled"} {...others} />);
}

export default Component;
