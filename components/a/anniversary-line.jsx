import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xuoh5bbbk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xuoh5bbbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:anniversary-line"} {...others} />);
}

export default Component;
