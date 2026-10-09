import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aodrq7bqi.css';
import '../../css/h/h4czgnbol.css';
import '../../css/q/qwggh7bvk.css';
import '../../css/r/rxk062bjj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aodrq7bqi"/><path class="h4czgnbol"/><path class="qwggh7bvk"/><path class="rxk062bjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:investment-20-bold"} {...others} />);
}

export default Component;
