import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qt5up1vxc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qt5up1vxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:software-resource-resource"} {...others} />);
}

export default Component;
