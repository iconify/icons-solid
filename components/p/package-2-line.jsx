import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qyw8m8bhx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qyw8m8bhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:package-2-line"} {...others} />);
}

export default Component;
