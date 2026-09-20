import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxq3-eb3u.css';
import '../../css/x/x3ezi_wmn.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="bxq3-eb3u"/><path clip-rule="evenodd" class="x3ezi_wmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:medal-16"} {...others} />);
}

export default Component;
