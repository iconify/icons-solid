import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ceq48ugul.css';
import '../../css/k/kw7672rxx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ceq48ugul"/><path class="kw7672rxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:frog-20"} {...others} />);
}

export default Component;
