import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qwuo8mbhr.css';
import '../../css/t/t37b9jb9z.css';
import '../../css/q/qh6npjbwk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qwuo8mbhr"/><path class="t37b9jb9z"/><path class="qh6npjbwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:move-48"} {...others} />);
}

export default Component;
