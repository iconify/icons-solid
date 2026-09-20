import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ogv1gbb3q.css';
import '../../css/x/xp-jb6vzb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ogv1gbb3q"/><path class="xp-jb6vzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:science"} {...others} />);
}

export default Component;
