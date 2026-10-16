import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iicur4vle.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iicur4vle"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:three-phase-20-bold"} {...others} />);
}

export default Component;
