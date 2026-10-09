import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i43p6u3yo.css';
import '../../css/t/tp2nuligo.css';
import '../../css/v/vsr49z78k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i43p6u3yo"/><path class="tp2nuligo"/><path class="vsr49z78k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gift-20"} {...others} />);
}

export default Component;
