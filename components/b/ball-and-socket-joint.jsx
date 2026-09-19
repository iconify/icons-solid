import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sq2dc2dvd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="sq2dc2dvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:ball-and-socket-joint"} {...others} />);
}

export default Component;
