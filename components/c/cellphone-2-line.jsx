import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1_r-zqlu.css';
import '../../css/l/l9dsd9ghz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j1_r-zqlu"/><path class="l9dsd9ghz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:cellphone-2-line"} {...others} />);
}

export default Component;
