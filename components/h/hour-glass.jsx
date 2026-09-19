import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-n0b1j-f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e-n0b1j-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:hour-glass"} {...others} />);
}

export default Component;
