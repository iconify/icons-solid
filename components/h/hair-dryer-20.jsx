import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abwkqfblz.css';
import '../../css/j/j7p02hblv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="abwkqfblz"/><path class="j7p02hblv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hair-dryer-20"} {...others} />);
}

export default Component;
