import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4a-q3f0p.css';
import '../../css/h/hq809sb1p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b4a-q3f0p"/><path class="hq809sb1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tag-20-bold"} {...others} />);
}

export default Component;
