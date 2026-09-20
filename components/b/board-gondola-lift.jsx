import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwxucrbel.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rwxucrbel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:board-gondola-lift"} {...others} />);
}

export default Component;
