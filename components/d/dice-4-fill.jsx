import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixk8e1a3i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ixk8e1a3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:dice-4-fill"} {...others} />);
}

export default Component;
