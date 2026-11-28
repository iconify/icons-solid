import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejdqt1mgp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ejdqt1mgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chess-queen-solid"} {...others} />);
}

export default Component;
