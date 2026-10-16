import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gf4d2jblq.css';
import '../../css/t/tmmpscb4j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gf4d2jblq"/><path class="tmmpscb4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:desertification-20"} {...others} />);
}

export default Component;
