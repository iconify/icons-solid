import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksrkuob1y.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ksrkuob1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:camera-16"} {...others} />);
}

export default Component;
