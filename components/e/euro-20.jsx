import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4lq4-bat.css';
import '../../css/q/qv1r8v-de.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g4lq4-bat"/><path class="qv1r8v-de"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:euro-20"} {...others} />);
}

export default Component;
