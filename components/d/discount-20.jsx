import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gmd-u84-k.css';
import '../../css/h/h9ysk2g4z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gmd-u84-k"/><path class="h9ysk2g4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:discount-20"} {...others} />);
}

export default Component;
