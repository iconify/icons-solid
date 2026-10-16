import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g3k4bybje.css';
import '../../css/e/eo7syfsuw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g3k4bybje"/><path class="eo7syfsuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:floor-plan-48-bold"} {...others} />);
}

export default Component;
