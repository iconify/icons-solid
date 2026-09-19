import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3ojxbk_n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f3ojxbk_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-left-down-arrow-circle"} {...others} />);
}

export default Component;
