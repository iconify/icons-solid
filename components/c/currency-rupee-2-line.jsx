import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpqc9_8ge.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tpqc9_8ge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:currency-rupee-2-line"} {...others} />);
}

export default Component;
