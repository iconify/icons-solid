import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyerzhc-f.css';
import '../../css/t/t6lf1fb-h.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="iyerzhc-f"/><path class="t6lf1fb-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:reading-lamp"} {...others} />);
}

export default Component;
