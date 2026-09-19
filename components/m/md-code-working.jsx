import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfla53asp.css';
import '../../css/w/w67qn2bfs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zfla53asp"/><path class="w67qn2bfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-code-working"} {...others} />);
}

export default Component;
