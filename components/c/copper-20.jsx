import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0ii7tboz.css';
import '../../css/m/myf9c9bjz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z0ii7tboz"/><path class="myf9c9bjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:copper-20"} {...others} />);
}

export default Component;
