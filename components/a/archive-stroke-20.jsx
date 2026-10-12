import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kn7_7837p.css';
import '../../css/m/mjr421z4p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kn7_7837p"/><path class="mjr421z4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:archive-stroke-20"} {...others} />);
}

export default Component;
