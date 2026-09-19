import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbehc1c4q.css';
import '../../css/w/wbqok5b7u.css';
import '../../css/d/dh8u4eiln.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="vbehc1c4q"/><path class="wbqok5b7u"/><path class="dh8u4eiln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:cd-4x3"} {...others} />);
}

export default Component;
