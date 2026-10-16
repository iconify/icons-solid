import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8irp8b8i.css';
import '../../css/u/ur2a2fbgl.css';
import '../../css/x/x3jkzl--z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r8irp8b8i"/><path class="ur2a2fbgl"/><path class="x3jkzl--z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:air-fryer-20-bold"} {...others} />);
}

export default Component;
