import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9lwlibmh.css';
import '../../css/m/mocmm6bno.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="r9lwlibmh"/><path class="mocmm6bno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:gauge-middle-16"} {...others} />);
}

export default Component;
