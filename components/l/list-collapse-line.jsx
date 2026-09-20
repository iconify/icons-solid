import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ooddoerrv.css';
import '../../css/t/td92ekb3h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ooddoerrv"/><path class="td92ekb3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:list-collapse-line"} {...others} />);
}

export default Component;
