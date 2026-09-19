import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbj9wxbdm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dbj9wxbdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:bow-and-arrow"} {...others} />);
}

export default Component;
