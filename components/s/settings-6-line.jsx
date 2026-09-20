import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/de9jpqq0e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="de9jpqq0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:settings-6-line"} {...others} />);
}

export default Component;
