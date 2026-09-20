import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kso4zxb6q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kso4zxb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:add-square-fill"} {...others} />);
}

export default Component;
