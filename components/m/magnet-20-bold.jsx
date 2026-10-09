import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jkj35abos.css';
import '../../css/f/f_p8gj0ah.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jkj35abos"/><path class="f_p8gj0ah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:magnet-20-bold"} {...others} />);
}

export default Component;
