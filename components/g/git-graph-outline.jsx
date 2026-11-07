import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ey9xu1u9w.css';
import '../../css/z/zn204jbmn.css';
import '../../css/f/f01zc3pzh.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ey9xu1u9w"/><path class="zn204jbmn"/><path clip-rule="evenodd" class="f01zc3pzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:git-graph-outline"} {...others} />);
}

export default Component;
