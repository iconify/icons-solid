import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wycvh4b1h.css';
import '../../css/h/hnh9ojyty.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="wycvh4b1h"/><path class="hnh9ojyty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:white-medium-small-square"} {...others} />);
}

export default Component;
