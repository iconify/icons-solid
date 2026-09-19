import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xacjcgs0g.css';
import '../../css/b/bqq63mb0i.css';
import '../../css/j/jb1dlyuwt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xacjcgs0g"/><path class="bqq63mb0i"/><path class="jb1dlyuwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sparkles"} {...others} />);
}

export default Component;
