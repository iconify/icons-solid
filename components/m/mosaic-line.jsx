import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zef4ti3ay.css';
import '../../css/k/k63q7xktr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zef4ti3ay"/><path class="k63q7xktr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:mosaic-line"} {...others} />);
}

export default Component;
