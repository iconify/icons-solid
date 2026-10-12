import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzpmmxj6m.css';
import '../../css/j/jrayg3xau.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jzpmmxj6m"/><path class="jrayg3xau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:control-panel-48-bold"} {...others} />);
}

export default Component;
