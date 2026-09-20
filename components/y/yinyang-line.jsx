import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvzj0b48k.css';
import '../../css/x/xg6ua4r-y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uvzj0b48k"/><path class="xg6ua4r-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:yinyang-line"} {...others} />);
}

export default Component;
