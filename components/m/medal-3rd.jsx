import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-ughjblk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p-ughjblk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:medal-3rd"} {...others} />);
}

export default Component;
