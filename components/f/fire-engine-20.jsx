import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/um9jo7bca.css';
import '../../css/r/r5ivvvbes.css';
import '../../css/r/r7w_ozowo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="um9jo7bca"/><path class="r5ivvvbes"/><path class="r7w_ozowo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fire-engine-20"} {...others} />);
}

export default Component;
