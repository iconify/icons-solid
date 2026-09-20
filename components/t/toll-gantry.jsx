import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ju0-6kfns.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ju0-6kfns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:toll-gantry"} {...others} />);
}

export default Component;
