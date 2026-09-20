import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2_0eeu6q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x2_0eeu6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:wash-machine-line"} {...others} />);
}

export default Component;
