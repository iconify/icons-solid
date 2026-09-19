import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1lcx54am.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c1lcx54am"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-message-rounded-detail"} {...others} />);
}

export default Component;
