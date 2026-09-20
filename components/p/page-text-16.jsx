import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udaapxl3q.css';
import '../../css/o/owojoi_ur.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="udaapxl3q"/><path clip-rule="evenodd" class="owojoi_ur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:page-text-16"} {...others} />);
}

export default Component;
