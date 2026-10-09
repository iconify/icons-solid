import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7aql7bvn.css';
import '../../css/j/j652cjm3d.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f7aql7bvn"/><path class="j652cjm3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gallery-20-bold"} {...others} />);
}

export default Component;
