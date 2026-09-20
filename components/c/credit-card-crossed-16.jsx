import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a5clbybwu.css';
import '../../css/s/svtizv3vy.css';
import '../../css/l/l-57p0bbd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="a5clbybwu"/><path clip-rule="evenodd" class="svtizv3vy"/><path class="l-57p0bbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:credit-card-crossed-16"} {...others} />);
}

export default Component;
