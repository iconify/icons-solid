import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9af41bwu.css';
import '../../css/e/eo9c1jb5g.css';
import '../../css/n/n0qwfabul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d9af41bwu"/><path class="eo9c1jb5g"/><path class="n0qwfabul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:headphones-cable"} {...others} />);
}

export default Component;
