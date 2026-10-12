import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yi-d3bcqw.css';
import '../../css/t/t0gc7texs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yi-d3bcqw"/><path class="t0gc7texs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rabbit-20-bold"} {...others} />);
}

export default Component;
