import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tm-51lkin.css';
import '../../css/x/x1wvsgy0b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="tm-51lkin"/><path class="x1wvsgy0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:eq-low-boost-16"} {...others} />);
}

export default Component;
