import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zqkgrobmp.css';
import '../../css/w/wh-3tcbhd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zqkgrobmp"/><path class="wh-3tcbhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:java"} {...others} />);
}

export default Component;
