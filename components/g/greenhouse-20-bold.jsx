import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h228pmbtq.css';
import '../../css/j/jaad26bbm.css';
import '../../css/k/ky8gx6l8z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h228pmbtq"/><path class="jaad26bbm"/><path class="ky8gx6l8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:greenhouse-20-bold"} {...others} />);
}

export default Component;
