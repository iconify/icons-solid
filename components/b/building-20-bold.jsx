import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9ufisb4k.css';
import '../../css/t/t3wwm-c_d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t9ufisb4k"/><path class="t3wwm-c_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:building-20-bold"} {...others} />);
}

export default Component;
