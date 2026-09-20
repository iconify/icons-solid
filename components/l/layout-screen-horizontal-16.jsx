import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_v7ydg7q.css';
import '../../css/e/e-qkt480u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r_v7ydg7q"/><path clip-rule="evenodd" class="e-qkt480u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:layout-screen-horizontal-16"} {...others} />);
}

export default Component;
