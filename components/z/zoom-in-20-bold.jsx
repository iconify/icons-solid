import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj3zoshwv.css';
import '../../css/v/vlib7y67t.css';
import '../../css/d/duqi8c8_l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jj3zoshwv"/><path class="vlib7y67t"/><path class="duqi8c8_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:zoom-in-20-bold"} {...others} />);
}

export default Component;
