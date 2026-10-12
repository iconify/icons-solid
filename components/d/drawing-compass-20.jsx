import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y85bi0b7a.css';
import '../../css/q/q3818dbqt.css';
import '../../css/f/fbiyt7hbh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y85bi0b7a"/><path class="q3818dbqt"/><path class="fbiyt7hbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drawing-compass-20"} {...others} />);
}

export default Component;
