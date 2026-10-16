import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m53sf3b9t.css';
import '../../css/y/ylritbb4d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m53sf3b9t"/><path class="ylritbb4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tower-section-20-bold"} {...others} />);
}

export default Component;
