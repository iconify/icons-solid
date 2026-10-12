import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jz73jtbrx.css';
import '../../css/j/j8m18acze.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jz73jtbrx"/><path class="j8m18acze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:set-square-48"} {...others} />);
}

export default Component;
