import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsy6m-bng.css';
import '../../css/j/j04z_-bob.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hsy6m-bng"/><path class="j04z_-bob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:undo-20"} {...others} />);
}

export default Component;
