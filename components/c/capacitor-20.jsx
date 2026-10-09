import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_wwqhb6k.css';
import '../../css/s/sd5b7gblq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f_wwqhb6k"/><path class="sd5b7gblq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:capacitor-20"} {...others} />);
}

export default Component;
