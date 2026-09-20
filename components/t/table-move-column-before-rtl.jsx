import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3d7bpber.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l3d7bpber"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:table-move-column-before-rtl"} {...others} />);
}

export default Component;
