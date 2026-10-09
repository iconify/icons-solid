import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/e/e28wwgb7h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="e28wwgb7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:face-laugh-20"} {...others} />);
}

export default Component;
