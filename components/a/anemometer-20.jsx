import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nd98t6bsy.css';
import '../../css/n/n6krgwbie.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nd98t6bsy"/><path class="n6krgwbie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:anemometer-20"} {...others} />);
}

export default Component;
