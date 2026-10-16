import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kr-mm0bik.css';
import '../../css/f/f_pk9vbvt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kr-mm0bik"/><path class="f_pk9vbvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermistor-20"} {...others} />);
}

export default Component;
