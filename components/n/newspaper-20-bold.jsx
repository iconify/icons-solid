import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r39i0s06f.css';
import '../../css/m/muoqy1bdf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r39i0s06f"/><path class="muoqy1bdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:newspaper-20-bold"} {...others} />);
}

export default Component;
