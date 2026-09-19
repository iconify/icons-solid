import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmoh5dbej.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zmoh5dbej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:thumbs-up"} {...others} />);
}

export default Component;
