import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-6_194sg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="m-6_194sg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:angelfish-under-water"} {...others} />);
}

export default Component;
