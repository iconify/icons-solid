import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmpf0vbkr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cmpf0vbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-happy-heart-eyes"} {...others} />);
}

export default Component;
