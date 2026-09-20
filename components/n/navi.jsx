import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/riyht5b5q.css';
import '../../css/i/iioje8b_g.css';
import '../../css/c/czwbv68iw.css';
import '../../css/d/di0l2xbsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="riyht5b5q"/><path class="iioje8b_g"/><path class="czwbv68iw"/><path class="di0l2xbsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:navi"} {...others} />);
}

export default Component;
