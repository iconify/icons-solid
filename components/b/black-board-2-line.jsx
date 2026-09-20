import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gu624--wg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gu624--wg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:black-board-2-line"} {...others} />);
}

export default Component;
