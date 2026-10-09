import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3emfubau.css';
import '../../css/a/ai0csy1rf.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j3emfubau"/><path class="ai0csy1rf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:edit-48"} {...others} />);
}

export default Component;
