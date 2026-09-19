import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9rwhqbjf.css';
import '../../css/j/jlqtr1aep.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s9rwhqbjf"/><path class="jlqtr1aep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:biohazard"} {...others} />);
}

export default Component;
