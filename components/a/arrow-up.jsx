import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhdo1yb9d.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nhdo1yb9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:arrow-up"} {...others} />);
}

export default Component;
