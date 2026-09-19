import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhp2b6bta.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mhp2b6bta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:ammunition"} {...others} />);
}

export default Component;
