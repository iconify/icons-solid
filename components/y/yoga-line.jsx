import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ik13m2b0k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ik13m2b0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:yoga-line"} {...others} />);
}

export default Component;
