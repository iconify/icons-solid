import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8wvi4bxf.css';
import '../../css/q/qosg0qauw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j8wvi4bxf"/><path class="qosg0qauw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:radiator-48"} {...others} />);
}

export default Component;
