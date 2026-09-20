import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjr9i_a7v.css';
import '../../css/m/m5y4f8bjk.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="jjr9i_a7v"/><path class="m5y4f8bjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:apple-intelligence-frame-line"} {...others} />);
}

export default Component;
