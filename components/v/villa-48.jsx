import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kixdt2b5z.css';
import '../../css/q/qwnitvbfh.css';
import '../../css/r/r2evrhb9i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kixdt2b5z"/><path class="qwnitvbfh"/><path class="r2evrhb9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:villa-48"} {...others} />);
}

export default Component;
