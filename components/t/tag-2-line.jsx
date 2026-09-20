import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/ba874dbxc.css';
import '../../css/r/r-_tixcty.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ba874dbxc"/><path class="r-_tixcty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:tag-2-line"} {...others} />);
}

export default Component;
