import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3_9axbeg.css';
import '../../css/d/das08qb6u.css';
import '../../css/w/wlpl3rydx.css';
import '../../css/x/x0ob3uo9t.css';
import '../../css/p/p3-ad7b2x.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="s3_9axbeg"/><path class="das08qb6u"/><path class="wlpl3rydx"/><path class="x0ob3uo9t"/><path class="p3-ad7b2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:candle"} {...others} />);
}

export default Component;
