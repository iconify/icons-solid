import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvo5b-0za.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nvo5b-0za"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:navigation-20"} {...others} />);
}

export default Component;
