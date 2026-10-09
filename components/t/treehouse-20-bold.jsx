import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tc3myab7j.css';
import '../../css/i/ixi5u0bsc.css';
import '../../css/u/ulkpqrb-s.css';
import '../../css/p/pcwgn2bgg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tc3myab7j"/><path class="ixi5u0bsc"/><path class="ulkpqrb-s"/><path class="pcwgn2bgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:treehouse-20-bold"} {...others} />);
}

export default Component;
