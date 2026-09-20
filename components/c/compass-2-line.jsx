import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e0dlm8brv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e0dlm8brv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:compass-2-line"} {...others} />);
}

export default Component;
