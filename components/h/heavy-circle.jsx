import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg5u1_b8w.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xg5u1_b8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:heavy-circle"} {...others} />);
}

export default Component;
