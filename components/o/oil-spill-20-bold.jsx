import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukc5chhna.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ukc5chhna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oil-spill-20-bold"} {...others} />);
}

export default Component;
