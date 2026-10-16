import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gro8lebrz.css';
import '../../css/k/kifto8buo.css';
import '../../css/g/geksxacrs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gro8lebrz"/><path class="kifto8buo"/><path class="geksxacrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-hydrogen-20-bold"} {...others} />);
}

export default Component;
