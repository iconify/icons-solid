import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8nqnqjtu.css';
import '../../css/h/hgrdrccsx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s8nqnqjtu"/><path class="hgrdrccsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:pizza-line"} {...others} />);
}

export default Component;
