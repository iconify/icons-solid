import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0y3r4nwc.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="h0y3r4nwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-pathfinder-intersect-pathfinder-intersect-work"} {...others} />);
}

export default Component;
