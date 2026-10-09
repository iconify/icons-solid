import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ha3x0fenn.css';
import '../../css/g/ge-9v90ve.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ha3x0fenn"/><path class="ge-9v90ve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermal-store-20"} {...others} />);
}

export default Component;
