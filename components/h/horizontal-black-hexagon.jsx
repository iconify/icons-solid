import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjfivrb5n.css';
import '../../css/a/avaswac7g.css';
import '../../css/f/fy-udj6-o.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="pjfivrb5n"/><path class="avaswac7g"/><path class="fy-udj6-o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:horizontal-black-hexagon"} {...others} />);
}

export default Component;
