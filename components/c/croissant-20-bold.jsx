import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvo2ojb3s.css';
import '../../css/h/hhfof8-2l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kvo2ojb3s"/><path class="hhfof8-2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:croissant-20-bold"} {...others} />);
}

export default Component;
