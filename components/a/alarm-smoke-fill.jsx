import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cap6s5brd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cap6s5brd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:alarm-smoke-fill"} {...others} />);
}

export default Component;
