import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2apqubdg.css';
import '../../css/o/oj1zdwuco.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="d2apqubdg"/><path class="oj1zdwuco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:mouse-right-button-16"} {...others} />);
}

export default Component;
