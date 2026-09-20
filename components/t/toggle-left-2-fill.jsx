import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsdd1r8-q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hsdd1r8-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:toggle-left-2-fill"} {...others} />);
}

export default Component;
