import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uh2t47oxp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uh2t47oxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-message-square-minus"} {...others} />);
}

export default Component;
