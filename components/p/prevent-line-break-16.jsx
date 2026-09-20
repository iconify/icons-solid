import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvcrfueyt.css';
import '../../css/h/h_98oxbit.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="tvcrfueyt"/><path class="h_98oxbit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:prevent-line-break-16"} {...others} />);
}

export default Component;
