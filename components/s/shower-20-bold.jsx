import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1ddg9bac.css';
import '../../css/a/a2s7bl5_y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v1ddg9bac"/><path class="a2s7bl5_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shower-20-bold"} {...others} />);
}

export default Component;
