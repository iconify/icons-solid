import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvb3okbjy.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="fvb3okbjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:guitar-machine-head-16"} {...others} />);
}

export default Component;
