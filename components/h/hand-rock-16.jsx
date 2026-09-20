import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vex5fhbuk.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="vex5fhbuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:hand-rock-16"} {...others} />);
}

export default Component;
