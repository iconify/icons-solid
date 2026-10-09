import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbjnu1baw.css';
import '../../css/b/bzz03rb9j.css';
import '../../css/g/gwv7mvsvu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rbjnu1baw"/><path class="bzz03rb9j"/><path class="gwv7mvsvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:geyser-20"} {...others} />);
}

export default Component;
