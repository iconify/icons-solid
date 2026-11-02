import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y14amgb7b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y14amgb7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:door-closed-locked-line"} {...others} />);
}

export default Component;
