import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tznvg3blh.css';
import '../../css/g/gvyhpkbmc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tznvg3blh"/><path clip-rule="evenodd" class="gvyhpkbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:save-to-disk-16"} {...others} />);
}

export default Component;
