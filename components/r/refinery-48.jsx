import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok47q6brj.css';
import '../../css/j/j2wligtld.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ok47q6brj"/><path class="j2wligtld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:refinery-48"} {...others} />);
}

export default Component;
