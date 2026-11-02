import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-a7t_fjq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-a7t_fjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:game-1-fill"} {...others} />);
}

export default Component;
