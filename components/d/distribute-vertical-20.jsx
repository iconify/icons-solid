import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6w625b-a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u6w625b-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:distribute-vertical-20"} {...others} />);
}

export default Component;
