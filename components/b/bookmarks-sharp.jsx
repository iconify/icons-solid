import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/si0jw2byf.css';
import '../../css/r/r7dafkb_q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="si0jw2byf"/><path class="r7dafkb_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:bookmarks-sharp"} {...others} />);
}

export default Component;
