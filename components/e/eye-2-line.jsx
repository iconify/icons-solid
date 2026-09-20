import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7g8utbwr.css';
import '../../css/v/v8v4y7b1z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o7g8utbwr"/><path class="v8v4y7b1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:eye-2-line"} {...others} />);
}

export default Component;
