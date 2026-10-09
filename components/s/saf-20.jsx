import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oyzll6bdo.css';
import '../../css/z/z6uphtb8a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oyzll6bdo"/><path class="z6uphtb8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:saf-20"} {...others} />);
}

export default Component;
