import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otrl-6b3q.css';
import '../../css/o/oq8tqccjn.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="otrl-6b3q"/><path class="oq8tqccjn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:check-mark"} {...others} />);
}

export default Component;
