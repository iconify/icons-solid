import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abppvacyo.css';
import '../../css/y/yv427ebbj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="abppvacyo"/><path clip-rule="evenodd" class="yv427ebbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:view-page-single-16"} {...others} />);
}

export default Component;
