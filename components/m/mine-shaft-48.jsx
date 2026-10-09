import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ori7inbrr.css';
import '../../css/q/q116iryet.css';
import '../../css/v/vyt_0h-7m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ori7inbrr"/><path class="q116iryet"/><path class="vyt_0h-7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mine-shaft-48"} {...others} />);
}

export default Component;
