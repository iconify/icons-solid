import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrz8nvb6z.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="nrz8nvb6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:information-desk-person"} {...others} />);
}

export default Component;
