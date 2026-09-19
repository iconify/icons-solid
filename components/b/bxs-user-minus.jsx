import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kd6sfoi7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kd6sfoi7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-user-minus"} {...others} />);
}

export default Component;
